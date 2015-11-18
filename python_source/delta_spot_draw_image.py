# -*- coding: utf-8 -*-
# файл: delta_spot_draw_image.py
# Изменение коэффициента дельта call опциона от цены актива
# Библиотеку можно скачать по адресу:
# absolem.info/python_source/absolem_dx.py
import absolem_dx
from matplotlib import mlab
import pylab
S0 = 86550
K = 85000
T = 1.0/252*24
r = 0.1
sigma = 0.3
price = []
x_spot = [_ for _ in range(70000,100000,500)]

for spot in x_spot:
    price.append(absolem_dx.delta_call(spot, K, T, r, sigma))

pylab.rc('font',**{'family':'verdana'})
# Подписываем оси
fig = pylab.figure()
axes = fig.add_subplot (1, 1, 1)
axes.set_xlabel ('Цена актива')
axes.set_ylabel ('Значение дельты')

pylab.title("Изменение коэффициента дельта\n call опциона от цены актива\n Страйк = 85000; T=24 дня; ставка = 10%; vol = 30% ", size = "small")
# Включаем отображение сетки
pylab.grid()
    
# Нарисуем одномерный график
pylab.plot (x_spot, price)
# Покажем окно с нарисованным графиком
pylab.show()
# Cохраняем изображение в файл
pylab.savefig('figure_delta.png', format = 'png')