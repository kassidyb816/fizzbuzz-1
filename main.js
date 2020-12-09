for (let i = 1; i < 101; i++) {//the value of i is 1. i is less than 100. Increment the value of i up too 100.
    let value = i; 
    if (i % 3 == 0) value = 'fizz'//if the remainder of the !/3 is zero the value is fizz
    if (i % 5 == 0) value = 'buzz'//if the remainder of the !/5 is zero the value is buzz
    if (i % 3 == 0 && i % 5 == 0) value = 'fizzbuzz'//if the remainder of the !/3 is zero and the remaider of i/5 is zero the value is fizz buzz.
    //console.log(value);
    
   document.querySelector("#displayValue").innerHTML += value + "<br>";
}
