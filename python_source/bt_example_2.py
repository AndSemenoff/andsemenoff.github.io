# -*- coding: utf-8 -*-
import bt
data = bt.get('OGZPY, SBRCY', start='2016-01-01', end='2016-08-01')
print(data.tail())
s = bt.Strategy('s1', [bt.algos.RunMonthly(),
                       bt.algos.SelectAll(),
                       bt.algos.WeighEqually(),
                       bt.algos.Rebalance()])
# тестируем нашу стратегию
test = bt.Backtest(s, data)
#print(test)
res = bt.run(test)
# выводим график средств
print(res)
res.plot()
# выводим статистические коэффициенты
res.display()
# выводим гистограмму прибылей и убытков
res.plot_histogram()
# выводим график весов акций в портфеле
res.plot_security_weights()