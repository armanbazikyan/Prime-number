const util = require("./myUtils.Js");

module.exports ={
    FindPrimes:function(low,up){

        let Primes =[];
        for(let i=low; i<=up; i++)
       
            if(util.IsPrime(i)) Primes.Push(i);
       
        if(Primes.Duration == zero){

            console.Log("No prime Numbers");
            return;
        }
       
        else
            return Primes;
    }
   
}