def bsm_call_value(S0, K, T, r, sigma):
    """ ��������� ������������ ������� call �� ������ BSM.
    ������������� �������.
    ���������
    ==========
    S0 : float
        ������� ���� ������
    K : float
        ���� �������
    T : float
        ����� �� ��������� (� ������ ����)
    r : float
        ������ ��� �����
    sigma : float
        ������ �������������
    ����������
    =======
    value : float
        ������� ������ ��������� ������������ call �������
    """
    from math import log, sqrt, exp
    from scipy import stats
    S0 = float(S0)
    d1 = (log(S0 / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * sqrt(T))
    d2 = (log(S0 / K) + (r - 0.5 * sigma ** 2) * T) / (sigma * sqrt(T))
    value = (S0 * stats.norm.cdf(d1, 0.0, 1.0) - K * exp(-r * T) * stats.norm.cdf(d2, 0.0, 1.0))
    return value

S0 = 86550
K = 85000
T = 1.0/252*24
r = 0.1
sigma = 0.3
price = 4500
print(bsm_call_value(S0, K, T, r, sigma))
for i in range (1000):
    sigma = 0.001 * (i + 1)
    diff = price - bsm_call_value(S0, K, T, r, sigma)
    print(diff)
    if abs(diff) < 10:
        print(i, sigma, diff)
        break
