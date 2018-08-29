# -*- coding: utf-8 -*-
# файл doctest_example_1.py
def simple(a):
    '''
    >>> simple(4)
    15
    '''
    return a*a-1
    
if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)