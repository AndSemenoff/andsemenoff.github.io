# -*- coding: utf-8 -*-
# файл: delta_time_draw_image.py
# Изменение коэффициента дельта call опциона от времен
# Библиотеку можно скачать по адресу:
# absolem.info/python_source/absolem_dx.py
import absolem_dx
import matplotlib.pyplot as plt
from matplotlib import rcParams
from matplotlib import mlab
import pylab

rcParams['font.family'] = 'fantasy'
rcParams['font.fantasy'] = 'verdana'

S0 = 85000
K = 85000
T = 1.0/252*24
r = 0.1
sigma = 0.3
price = []
x_time = [1/252*i for i in range(1,51)]
days = [_ for _ in range(1,51)]

for time in x_time:
    price.append(absolem_dx.delta_call(S0, K, time, r, sigma))

fig = plt.figure()
ax = fig.add_subplot(111)
# Подписываем оси
ax.set_xlabel('Время до конца контракта (дни)')
ax.set_ylabel('Значение дельты')
ax.set_title('График функции')

ax.set_title("Изменение коэффициента дельта\n call опциона от цены актива\n Страйк = 85000; T=24 дня; ставка = 10%; vol = 30% ", size = "small")
# Включаем отображение сетки
ax.grid(True, which=u'major', color='black', linewidth=.5, linestyle='dotted')
    
# Нарисуем одномерный график
ax.plot (days, price)
# Покажем окно с нарисованным графиком
plt.show()
# Cохраняем изображение в файл
plt.savefig('figure_delta.png', format = 'png')