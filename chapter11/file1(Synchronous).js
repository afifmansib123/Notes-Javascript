
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true
}

//return a random number with this max
const random = (max) => Math.floor(Math.random() * max);


function generatePrimes(howmany) {
  const primes = [];
  while (primes.length < howmany) {
    const candidate = random(2000);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}
console.log(generatePrimes(200029))