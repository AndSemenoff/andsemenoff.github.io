# -*- coding: utf-8 -*-
"""
@author: Semenov Andrey
"""
import pandas as pd
import yfinance as yf
import datetime
today = datetime.date.today()

# There are 2 tables on the Wikipedia page
# we want the first table
payload = pd.read_html('https://en.wikipedia.org/wiki/List_of_S%26P_500_companies')
df = payload[0]
print(df.head())
start_date = '2022-01-01' #'%Y-%m-%d'
end_date = today          #'%Y-%m-%d'
symbols = df['Symbol'].values.tolist()
ticker = yf.Ticker(symbols[0])
load_ticker = ticker.history(start = start_date, end = end_date, actions=True)
load_ticker["Ticker"] = symbols[0]
base = load_ticker

for symbol in symbols[1:]:
    ticker = yf.Ticker(symbol)
    load_ticker = ticker.history(start = start_date, end = end_date, actions=True)
    load_ticker["Ticker"] = symbol
    base = pd.concat([base, load_ticker])
print(base)
base.to_parquet('base_sp500.parquet.gzip', compression='gzip')