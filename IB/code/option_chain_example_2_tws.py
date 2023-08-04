from ibapi.client import EClient
from ibapi.wrapper import EWrapper
from ibapi.common import SetOfString
from ibapi.common import SetOfFloat
from threading import Timer

class TestApp(EWrapper, EClient):
    def __init__(self):
        EClient.__init__(self, self)

    def error(self, reqId, errorCode, errorString):
        print("Error: ", reqId, " ", errorCode, " ", errorString)

    def nextValidId(self, orderId):
        self.start()

    def securityDefinitionOptionParameter(self, reqId:int, exchange:str,
        underlyingConId:int, tradingClass:str, multiplier:str,
        expirations:SetOfString, strikes:SetOfFloat):
        print("SecurityDefinitionOptionParameter.",
              "ReqId:", reqId, "Exchange:", exchange, "Underlying conId:", underlyingConId, "TradingClass:", tradingClass, "Multiplier:", multiplier,
              "Expirations:", expirations, "Strikes:", str(strikes),"\n")

    def securityDefinitionOptionParameterEnd(self, reqId:int):
        print("SecurityDefinitionOptionParameterEnd. ReqId:", reqId)

    def start(self):
        # 265598 is the conId (contract ID) for AAPL Nasdaq stock
        self.reqSecDefOptParams(1, "AAPL", "", "STK", 265598)

    def stop(self):
        self.done = True
        self.disconnect()


def main():
    app = TestApp()
    app.nextOrderId = 0
    app.connect("127.0.0.1", 7497, 0)

    Timer(4, app.stop).start()
    app.run()


if __name__ == "__main__":
    main()