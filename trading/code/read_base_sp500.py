# -*- coding: utf-8 -*-
"""
@author: Semenov Andrey
"""
import pandas as pd
import yfinance as yf

base = pd.read_parquet('base_sp500.parquet.gzip')
print(base.columns)
print(len(base.loc[base.Dividends > 0].Ticker))