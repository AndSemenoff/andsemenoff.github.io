import pandas
import pandas.io.data
import pandas_datareader.data
import datetime
import matplotlib.pyplot as plt

# Window length for moving average
window_length = 14

# Dates
start = datetime.datetime(2010, 1, 1)
end = datetime.datetime(2013, 1, 27)

# Get data
#data = pandas.io.data.DataReader('AAPL', 'yahoo', start, end)
data = pandas_datareader.data.DataReader('AAPL', 'yahoo', start, end)
# Get just the close
close = data['Adj Close']
# Get the difference in price from previous step
delta = close.diff()
# Get rid of the first row, which is NaN since it did not have a previous 
# row to calculate the differences
delta = delta[1:] 

# Make the positive gains (up) and negative gains (down) Series
up, down = delta.copy(), delta.copy()
up[up < 0] = 0
down[down > 0] = 0

# Calculate the EWMA
roll_up1 = up.ewm(min_periods=0,com=14,adjust=True,ignore_na=False).mean()
#roll_up1 = pandas.stats.moments.ewma(up, window_length)
#down = down.abs()
roll_down1 = abs(down).ewma(min_periods=0,com=14,adjust=True,ignore_na=False).mean()

# Calculate the RSI based on EWMA
RS1 = roll_up1 / roll_down1
RSI1 = 100.0 - (100.0 / (1.0 + RS1))

# Calculate the SMA
roll_up2 = pandas.rolling_mean(up, window_length)
roll_down2 = pandas.rolling_mean(down.abs(), window_length)

# Calculate the RSI based on SMA
RS2 = roll_up2 / roll_down2
RSI2 = 100.0 - (100.0 / (1.0 + RS2))

# Compare graphically
plt.figure()
RSI1.plot()
RSI2.plot()
plt.legend(['RSI via EWMA', 'RSI via SMA'])
plt.show()