# -*- coding: utf-8 -*-
# файл doctest_example_2.py
def simple(a):
    return a*a-1
 
if __name__ == "__main__":
    import doctest
    doctest.testfile("doctest.txt")