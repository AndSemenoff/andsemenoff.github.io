import numpy as np
cashflows=[-45.45,50]
npv=np.npv(0.1,cashflows)
print(round(50/(1+0.1),2))
print(round(npv,2))
