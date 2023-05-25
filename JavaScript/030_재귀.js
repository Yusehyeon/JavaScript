`
def factorial(n):
    if n <= 1:
        return i
    return n * factorial(n-1)

# n * n-1 * n-2 * n-3 * .... * 1
`;

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// factorial(5) 5 * factorial(4)   5 * 24
// factorial(3) 3 * factorial(2)   4 * 6
// factorial(4) 4 * factorial(3)   3 * 2
// factorial(2) 2 * factorial(1)   2 * 1
// factorial(1)
