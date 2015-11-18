import scipy as sp
from matplotlib.pyplot import *
cashflows=[-100, 50, 60, 70]
rate=[]
npv=[]
x=(0, 0.7)
y=(0, 0)
for i in range(1,70):
    rate.append(0.01*i)
    npv.append(sp.npv(0.01*i,cashflows))
    #npv.append(sp.npv(0.01*i,cashflows[1:])+cashflows[0])
point = round(sp.irr(cashflows), 2)
print(point)
plot(rate,npv)
plot(x,y)
plot(point, 0, 'ro' )
figtext(point,0.2,str(point))
show()