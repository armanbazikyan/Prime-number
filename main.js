const util = require("./util1.js");
const reader = require("readline-sync");

let num1 = reader.questionInt("insert number 1");

let num2 = reader.questionInt("insert number 2");

let primes = util.FindPrimes(num1,num2);

for(let i=0; i<primes.length;i++)
{
    console.log(primes[i]);
}
