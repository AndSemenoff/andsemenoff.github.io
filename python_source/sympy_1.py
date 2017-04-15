#! /usr/bin/env python
# -*- coding: utf-8 -*-
# в идеале нужно еще учесть накопленный купонный доход (НКД)
import sympy
from sympy import summation, symbols
n, m, t = symbols('n m t', integer=True)
nominal_price = 1000 # номинальная цена облигации
k = 0.07 # годовая ставка купона
r = 0.06 # рыночная ставка
m = 4 # число купонных выплат в году
n = 5 # срок облигации (лет)
last = nominal_price/(1 + r/m)**(m*n)
result = summation(((nominal_price*k)/m)/(1 + r/m)**(t), (t, 1, m*n)) + last
print(result)