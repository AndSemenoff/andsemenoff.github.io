import numpy as np

def mySettings():
	settins['markets'] = ['CASH', 'F_AD', 'F_BO']

    settings['lookback']= 504
    settings['budget']= 10**6
    settings['slippage']= 0.05

    return settings
	
def myTradingSystem(DATE, OPEN, HIGH, LOW, CLOSE, VOL, exposure, equity, settings):
	rsi1 = RSI(CLOSE, 100)
	rsi2 = RSI(CLOSE, 500)
	p = ((rsi1 - 50) + (rsi2 - 50))/2
	p[p<0] = p[p<0]/2
	p[np.isinf(p)] = 0
	
	return p, settings
	
def RSI(CLOSE, period):
	closeMom = CLOSE[1:,:] - CLOSE[:-1,:]
	up = closeMom >= 0
	down = closeMom < 0
	out = 100 - 100/(1+(np.mean(up[-(period+1):,:], axis = 0)/np.mean(down[-(period+1):,:], axis=0)))
	return out
	
# Evaluate trading system defined in current file.
if __name__ == '__main__':
    import quantiacsToolbox
    results = quantiacsToolbox.runts(__file__)	