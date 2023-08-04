# -*- coding: utf-8 -*-
"""
@author: Semenov Andrey
file: vix_write_to_file.py
"""
import pandas as pd

# https://www.cboe.com/tradable_products/vix/vix_historical_data/
# https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv

vix_history = pd.read_csv('https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv')

vix_history.DATE = pd.to_datetime(vix_history.DATE)
vix_history  = vix_history.set_index('DATE')
vix_history['Y'] = vix_history.index.year
vix_history['MoY'] = vix_history.index.month_name()        # MoY - Month of Year 
vix_history['DoW'] = vix_history.index.day_name()          # DoW - Day of week
vix_history.to_parquet('vix_daily.parquet.gzip', compression='gzip')