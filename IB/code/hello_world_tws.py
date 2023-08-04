from ibapi.client import EClient
from ibapi.wrapper import EWrapper
from ibapi.contract import Contract
import time

class TestApp(EWrapper, EClient):
    def __init__(self):
        EClient.__init__(self, self)

    def error(self, reqId, errorCode, errorString):
        print("Error: ", reqId, " ", errorCode, " ", errorString)

    def contractDetails(self, reqId, contractDetails):
        print("contractDetails: ", reqId, " ", contractDetails)
        
    def contractDetailsEnd(self, reqId):
        print("End of contractDetails")
        self.disconnect()

def main():
    app = TestApp()

    app.connect("127.0.0.1", 7497, 0)  # Should be a pause afterwards before invoking functions

    contract = Contract()
    contract.symbol = "AAPL"
    contract.secType = "STK"
    contract.exchange = "SMART"
    contract.currency = "USD"
    contract.primaryExchange = "NASDAQ"
    time.sleep(2)
    app.reqContractDetails(1, contract)

    app.run()


if __name__ == "__main__":
    main()