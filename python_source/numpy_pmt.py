import numpy as np
kredit = 2000000
rate = 0.11/12 # �������� � �������� ���������
period = 5*12 # ���� �������� � �������
payment = np.pmt(rate, period, kredit)
print(round(payment,2))