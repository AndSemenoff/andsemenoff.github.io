import numpy as np
kredit = 2000000
rate = 0.11/12 # приводим к мес€чным процентам
period = 5*12 # срок приводим к мес€цам
payment = np.pmt(rate, period, kredit)
print(round(payment,2))