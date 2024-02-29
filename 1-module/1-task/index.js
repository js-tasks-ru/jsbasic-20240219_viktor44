function factorial(n) {
  if (n === 0) {
    return 1
  } else {
  for ( i = n - 1; i >= 1; i-- ) {
    n = n * i
  }
return n
  }
}
