const factorial = (n) => {
  if(n === 1)
   return n;
  // la recursion es que llama de nuevo a la funcion(y se le pasa un arg)
  return n * factorial(n - 1);
}

factorial(3);