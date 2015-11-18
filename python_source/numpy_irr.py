import numpy as np
cashflows = [-45.45, 50]
irr = round(np.irr(cashflows), 2)
print(irr)