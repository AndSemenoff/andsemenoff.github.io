# -*- coding: utf-8 -*- 
# file: read_csv_1.py
import pandas as pd

def example_run():
    df = pd.read_csv("GAZP_day.csv", index_col=2, sep=',', parse_dates=True)
    print(df.head())  

if __name__=="__main__":
    example_run()