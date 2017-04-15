# -*- coding: utf-8 -*-
import pandas as pd
import matplotlib as mpl
from matplotlib import pyplot as plt
import pandas_datareader.data as web
import datetime

# Утилита для записи графика в файл
def save(name='', fmt='png'):
    pwd = os.getcwd()
    os.chdir('./pictures/%s' % fmt)
    plt.savefig('%s.%s' % (name, fmt), fmt='png')
    os.chdir(pwd)

# Параметры для надписей на кирилице
mpl.rcParams['font.family'] = 'fantasy'
mpl.rcParams['font.fantasy'] = 'Times New Roman', 'Ubuntu','Arial','Tahoma','Calibri'

start = datetime.datetime(2015, 1, 1)
end = datetime.datetime(2016, 7, 21)
df = web.DataReader("RUB=X", 'yahoo', start, end)
df['STD50'] = df['Close'].rolling(center=False, window = 50, min_periods=1).std()
df['STD30'] = df['Close'].rolling(center=False, window = 30, min_periods=1).std()
df['STD10'] = df['Close'].rolling(center=False, window = 10, min_periods=1).std()

fig = plt.figure()
ax1 = fig.add_subplot(2, 1, 1)

ax1.set_ylabel("Значения", size=14, color='black')
ax1.set_title("Курс рубля", size=20, color='black')
ax1.plot(df['Close'])
ax1.grid(True)


ax2 = fig.add_subplot(2, 1, 2, sharex = ax1)
ax2.set_title("Стандартные отклонения", size=20, color='black')
ax2.set_xlabel("Дата", size=14, color='black')
ax2.set_ylabel("Значения", size=14, color='black')
ax2.grid(True)
ax2.plot(df['STD50'], label = "отклонение за 50 дн.")
ax2.plot(df.STD30, label = "отклонение за 30 дн.")
ax2.plot(df['STD10'], label = "отклонение за 10 дн.")
ax2.legend(frameon=True, loc = 2)
plt.tight_layout() 
plt.show()

#save('pic_1', fmt='png')