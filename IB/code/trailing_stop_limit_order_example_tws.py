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

    def start(self):
    
        FX_contract = Contract() 
        FX_contract.symbol = "USD"
        FX_contract.secType = "CASH"
        FX_contract.exchange = "IDEALPRO"
        FX_contract.currency = "RUB"
    
        order = Order()
        order.action = "BUY"
        order.orderType = "TRAIL LIMIT"
        order.totalQuantity = 25000
        order.trailStopPrice = 76.99
        order.lmtPriceOffset = 0.02
        order.auxPrice = 0.03  # Trailing Amt field
        
        self.placeOrder(self.nextOrderId, FX_contract, order)

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