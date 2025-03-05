import random
from math import sqrt

def get_random_ts(n=10):
    """Returns a list of n random points in a time series"""
    return [(random.randint(0, 10), random.uniform(0, 1)) for _ in range(n)]