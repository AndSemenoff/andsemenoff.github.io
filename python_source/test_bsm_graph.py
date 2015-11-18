# -*- coding: utf-8 -*-
from absolem_dx import bsm_call_value
from matplotlib import mlab
import pylab
S0 = 86550
K = 85000
T = 1.0/252*24
r = 0.1
sigma = 0.3
#price = 4500
price = []
x_spot = [_ for _ in range(80000,90000,100)]

for spot in x_spot:
    price.append(bsm_call_value(spot, K, T, r, sigma))


figure = pylab.figure()
pylab.rc('font',**{'family':'verdana'})
#figure.title(u'Зависимость плотности водных растворов этилового спирта от температуры')

axes = figure.add_subplot (1, 1, 1)
pylab.title("Зависимость цены опциона от цены актива\n Страйк = 85000; T=24 дня; ставка = 10%; vol = 30% ")
pylab.grid()
#pylab.legend("")
axes.set_xlabel ('Цена актива')
axes.set_ylabel ('Цена опциона')    
# Нарисуем одномерный график
pylab.plot (x_spot, price)
# Покажем окно с нарисованным графиком
pylab.show()
#savefig('test.pdf')
#print(price)