import bt
data = bt.get('RUB=X', start='2016-01-01', end='2016-08-01')
print(data.head())