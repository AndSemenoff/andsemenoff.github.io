from scipy import log,exp,sqrt,stats
def bs_call(S,X,T,r,sigma):
    """Objective: estimate call for stock with one known dividend
    S: current stock price
    T : maturity date in years
    r : risk-free rate
    sigma: volatility
    """
    d1=(log(S/X)+(r+sigma*sigma/2.)*T)/(sigma*sqrt(T))
    d2 = d1-sigma*sqrt(T)
    return S*stats.norm.cdf(d1)-X*exp(-r*T)*stats.norm.cdf(d2)

S0 = 79790
K = 80000
T = 1.0/252*2
r = 0.0
sigma = 0.4

print(bs_call(S0, K, T, r, sigma))