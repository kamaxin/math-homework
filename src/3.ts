import random
def get_random_ts_code():
    num = str(random.randint(1000000000, 9999999999))
    den = str(random.randint(1000000000, 9999999999))
    return num + "/" + den