# -*- coding: utf-8 -*-
# файл absolem_dx.py
from math import log, sqrt, exp
from scipy import stats

''' Стоимость Европейского опциона call по модели BSM.
Аналитическая формула.
Параметры
==========
S0 : float
    текущая цена актива
K : float
    цена страйка
T : float
    время до истечения (в частях года)
r : float
    ставка без риска
sigma : float
    фактор волатильности
Возвращает
=======
value : float
    Текущую оценку стоимости Европейского call опциона
'''
def bsm_call_value(S0, K, T, r, sigma):
    S0 = float(S0)
    d1 = (log(S0 / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * sqrt(T))
    d2 = (log(S0 / K) + (r - 0.5 * sigma ** 2) * T) / (sigma * sqrt(T))
    value = (S0 * stats.norm.cdf(d1, 0.0, 1.0) - K * exp(-r * T) * stats.norm.cdf(d2, 0.0, 1.0))
    return value

def delta_call(S0, K, T, r, sigma):
    d1 = (log(S0 / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * sqrt(T))
    value = stats.norm.cdf(d1, 0.0, 1.0)
    return value

if __name__ == "__main__":
    S0 = 79790
    K = 80000
    T = 1.0/252*2
    r = 0.0
    sigma = 0.4
    print(delta_call(S0, K, T, r, sigma))