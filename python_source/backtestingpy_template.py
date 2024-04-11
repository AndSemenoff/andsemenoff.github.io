# file backtestingpy_template.py
import datetime
import pandas_ta as ta
import pandas as pd
import yfinance as yf
import backtesting as bt

class myStrategy(bt.Strategy):

    def init(self):
        pass

    def next(self):
        pass
          
assets = yf.Ticker("MSFT")
today = str(datetime.datetime.today()).split()[0]

assets_historical = assets.history(start="2022-01-02", end=today, interval="1d")

btest = bt.Backtest(assets_historical, myStrategy, cash=10_000, commission=.002)
stats = btest.run()
print(stats)
