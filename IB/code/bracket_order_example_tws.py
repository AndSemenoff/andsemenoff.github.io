from ibapi.client import EClient
from ibapi.wrapper import EWrapper
from ibapi.contract import Contract
from ibapi.order import *
from threading import Timer

class TestApp(EWrapper, EClient):
    def __init__(self):
        EClient.__init__(self, self)

    def error(self, reqId , errorCode, errorString):
        print("Error: ", reqId, " ", errorCode, " ", errorString)

    def nextValidId(self, orderId ):
        self.nextOrderId = orderId
        self.start()

    def orderStatus(self, orderId , status, filled, remaining, avgFillPrice, permId, parentId, lastFillPrice, clientId, whyHeld, mktCapPrice):
        print("OrderStatus. Id: ", orderId, ", Status: ", status, ", Filled: ", filled, ", Remaining: ", remaining, ", LastFillPrice: ", lastFillPrice)

    def openOrder(self, orderId, contract, order, orderState):
        print("OpenOrder. ID:", orderId, contract.symbol, contract.secType, "@", contract.exchange, ":", order.action, order.orderType, order.totalQuantity, orderState.status)

    def execDetails(self, reqId, contract, execution):
        print("ExecDetails. ", reqId, contract.symbol, contract.secType, contract.currency, execution.execId,
              execution.orderId, execution.shares, execution.lastLiquidity)

    @staticmethod
    def BracketOrder(
        parentOrderId:int, 
        action:str,  # BUY or SELL
        quantity, # :Decimal
        limitPrice:float,
        delta : float
        ):
     
        #This will be our main or "parent" order
        parent = Order()
        parent.orderId = parentOrderId
        parent.action = action
        parent.orderType = "LMT"
        parent.totalQuantity = quantity
        parent.lmtPrice = limitPrice
        #The parent and children orders will need this attribute set to False to prevent accidental executions.
        #The LAST CHILD will have it set to True, 
        parent.transmit = False
        
        if action == "SELL": delta = -delta
        
        takeProfit = Order()
        takeProfit.orderId = parent.orderId + 1
        takeProfit.action = "SELL" if action == "BUY" else "BUY"
        takeProfit.orderType = "LMT"
        takeProfit.totalQuantity = quantity
        takeProfit.lmtPrice = limitPrice + delta
        takeProfit.parentId = parentOrderId
        takeProfit.transmit = False

        stopLoss = Order()
        stopLoss.orderId = parent.orderId + 2
        stopLoss.action = "SELL" if action == "BUY" else "BUY"
        stopLoss.orderType = "STP"
        #Stop trigger price
        stopLoss.auxPrice = limitPrice - delta/2
        stopLoss.totalQuantity = quantity
        stopLoss.parentId = parentOrderId
        #In this case, the low side order will be the last child being sent. Therefore, it needs to set this attribute to True 
        #to activate all its predecessors
        stopLoss.transmit = True

        bracketOrder = [parent, takeProfit, stopLoss]
        return bracketOrder

    def start(self):
        # define contract for USD.RUB forex pair
        FX_contract = Contract() 
        FX_contract.symbol = "USD"
        FX_contract.secType = "CASH"
        FX_contract.exchange = "IDEALPRO"
        FX_contract.currency = "RUB"

        
        bracket = self.BracketOrder(parentOrderId = self.nextOrderId, 
            action = "SELL", 
            quantity = 25000, 
            limitPrice = 77.67, 
             delta = 0.1)
        for order in bracket:
            self.placeOrder(order.orderId, FX_contract, order)
            #self.nextOrderId = self.nextValidId(self.nextOrderId)  # need to advance this we'll skip one extra oid, it's fine
        

    def stop(self):
        self.done = True
        self.disconnect()

def main():
    app = TestApp()
    app.nextOrderId = 0
    app.connect("127.0.0.1", 7497, 9)

    Timer(3, app.stop).start()
    app.run()

if __name__ == "__main__":
    main()