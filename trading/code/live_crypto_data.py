# file: live_crypto_data.py
from alpaca.data.live import CryptoDataStream
import configparser

class AlpacaCrypto():
    def __init__(self, symbol="BTC/USD"):

        config = configparser.ConfigParser()
        config.read('alpaca.ini')

        # API credentials for Alpaca
        API_KEY = config["DEFAULT"]["API_KEY"]  
        API_SECRET = config["DEFAULT"]["API_SECRET"]

        self.wss_client = CryptoDataStream(API_KEY, API_SECRET)
        self.symbol = symbol

    # async handler
    async def quote_data_handler(self, data):
        # quote data will arrive here
        print(data)
        
    def run(self):
        self.wss_client.subscribe_quotes(self.quote_data_handler, self.symbol)
        print(f"Client is runing ...")
        self.wss_client.run()

if __name__ == "__main__":
    crypto_data_stream = AlpacaCrypto()
    crypto_data_stream.run()