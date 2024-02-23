import datetime
import pandas_ta as ta
import pandas as pd
import yfinance as yf

from backtesting import Backtest
from backtesting import Strategy
from backtesting.lib import crossover

class RsiOscillator(Strategy):

    upper_bound = 70
    lower_bound = 30
    rsi_window = 14

    # Do as much initial computation as possible
    def init(self):
        self.rsi = self.I(ta.rsi, pd.Series(self.data.Close), self.rsi_window)

    # Step through bars one by one
    # Note that multiple buys are a thing here
    def next(self):
        if crossover(self.rsi, self.upper_bound):
            self.position.close()
        elif crossover(self.lower_bound, self.rsi):
            self.buy()
            
msft = yf.Ticker("MSFT")
msft_historical = msft.history(start="2022-01-02", end="2024-02-07", interval="1d")

bt = Backtest(msft_historical, RsiOscillator, cash=10_000, commission=.002)
stats = bt.run()
bt.plot()