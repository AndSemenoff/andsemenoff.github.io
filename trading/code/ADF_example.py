import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import statsmodels.api as sm
from statsmodels.tsa.stattools import adfuller
from statsmodels.tsa.stattools import kpss

# Утилита для записи графика в файл
import os
def save(name='', type='png'):
    pwd = os.getcwd()
    os.chdir('./pictures/')
    plt.savefig('%s.%s' % (name, type), format=type)
    os.chdir(pwd)

sunspots = sm.datasets.sunspots.load_pandas().data

sunspots.index = pd.Index(sm.tsa.datetools.dates_from_range("1700", "2008"))
del sunspots["YEAR"]

sunspots.plot(figsize=(12, 8))
save("ADF_KPSS_pic_1")


def kpss_test(timeseries):
    print("Results of KPSS Test:")
    kpsstest = kpss(timeseries, regression="c", nlags="auto")
    kpss_output = pd.Series(
        kpsstest[0:3], index=["Test Statistic", "p-value", "Lags Used"]
    )
    for key, value in kpsstest[3].items():
        kpss_output["Critical Value (%s)" % key] = value
    print(kpss_output)


def adf_test(timeseries):
    print("Results of Dickey-Fuller Test:")
    dftest = adfuller(timeseries, autolag="AIC")
    dfoutput = pd.Series(
        dftest[0:4],
        index=[
            "Test Statistic",
            "p-value",
            "#Lags Used",
            "Number of Observations Used",
        ],
    )
    for key, value in dftest[4].items():
        dfoutput["Critical Value (%s)" % key] = value
    print(dfoutput)
    
adf_test(sunspots["SUNACTIVITY"])
kpss_test(sunspots["SUNACTIVITY"])

sunspots["SUNACTIVITY_diff"] = sunspots["SUNACTIVITY"] - sunspots["SUNACTIVITY"].shift(1)
diff = sunspots["SUNACTIVITY_diff"].dropna()

plt.figure(figsize=(12,8))
fig2 = plt.figure(2)
ax1 = fig2.add_subplot(111)
ax1.grid(True)
ax1.set_xlabel('Date')
ax1.set_ylabel('Difference')
plt.plot(diff, color='blue', label='Diff')
plt.legend(loc='best')
plt.title('Sun Activity Difference')
save("ADF_KPSS_pic_4")

adf_test(diff)
kpss_test(diff)

