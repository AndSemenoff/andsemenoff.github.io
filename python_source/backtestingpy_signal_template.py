# file backtestingpy_signal_template.py
import datetime
import pandas_ta as ta
import pandas as pd
import yfinance as yf
import backtesting as bt
import numpy as np

class myStrategy(bt.Strategy):

    def init(self):
        pass

    def next(self):
        current_signal = self.data.Signal[-1];
        #print(current_signal)
        if current_signal==1:
            if not self.position:
                self.buy()
        elif current_signal==-1:
            if self.position:
                self.position.close()                
          
assets = yf.Ticker("MSFT")
today = str(datetime.datetime.today()).split()[0]

assets_historical = assets.history(start="2022-01-02", end=today, interval="1d")
assets_historical["Signal"] = np.random.randint(-1, 2, len(assets_historical))

btest = bt.Backtest(assets_historical, myStrategy, cash=10_000, commission=.002)
stats = btest.run()
print(stats)
