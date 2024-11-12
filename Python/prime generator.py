def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

def prime_nums_generator():
    n = 2
    while True:
        if is_prime(n):
            yield n
        n += 1

# Create the generator object
primes = prime_nums_generator()

# Accept input from the user
n = int(input("Input the number of prime numbers you want to generate? "))

# Generate and print the first 10 prime numbers
print("First",n,"Prime numbers:")
for _ in range(n):
    print(next(primes))
