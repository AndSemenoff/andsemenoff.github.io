import os
import pandas as pd
import pandas_datareader.data as web
import datetime
import matplotlib as mpl
import matplotlib.pyplot as plt

# Утилита для записи графика в файл
def save(name='', fmt='png'):
    pwd = os.getcwd()
    os.chdir('./pictures/%s' % fmt)
    plt.savefig('%s.%s' % (name, fmt), fmt='png')
    os.chdir(pwd)


start = datetime.datetime(2016, 1, 10)
end = datetime.datetime(2016, 7, 21)

# Параметры для надписей на кирилице
mpl.rcParams['font.family'] = 'fantasy'
mpl.rcParams['font.fantasy'] = 'Times New Roman', 'Ubuntu','Arial','Tahoma','Calibri'

# В yahoo у рубля обозначение "RUB=X"
gs = web.DataReader("RUB=X", 'yahoo', start, end)
#print(gs.round(2))

fig = plt.figure()
ax1 = fig.add_subplot(111)
ax1.plot(gs.Close)
ax1.set_title("Курс рубля", size=20, color='black')
ax1.set_xlabel("Дата", size=14, color='black')
ax1.set_ylabel("Цена закрытия", size=14, color='black')
ax1.grid(True)
plt.tight_layout() # автоматическое выравнивание элементов на холсте plt
save('pic_1', fmt='png')
plt.show()