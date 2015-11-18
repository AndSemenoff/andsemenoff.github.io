from matplotlib.pyplot import *
fig1 = figure(facecolor='white')
ax1 = axes(frameon=False)
ax1.set_frame_on(False)
ax1.get_xaxis().tick_bottom()
ax1.axes.get_yaxis().set_visible(False)
x=range(0,11,2)
x1=range(len(x),0,-1)
y = [0]*len(x);
annotate("Today's value of $100 received today",xy=(0,0),xytext=(2,0.001),arrowprops=dict(facecolor='black',shrink=0.02))
annotate("Today's value of $100 received in 2 years",xy=(2,0.00005),xytext=(3.5,0.0008),arrowprops=dict(facecolor='black',shrink=0.02))
annotate("received in 6 years",xy=(4,0.00005),xytext=(5.3,0.0006),arrowprops=dict(facecolor='black',shrink=0.02))
annotate("received in 10 years",xy=(10,-0.00005),xytext=(4,-0.0006),arrowprops=dict(facecolor='black',shrink=0.02))
s = [50*2.5**n for n in x1];
title("Time value of money ")
xlabel("Time (number of years)")
scatter(x,y,s=s);
show()