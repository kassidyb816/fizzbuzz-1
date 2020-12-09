for (let i = 1; i <= 100; i++) {
    let value = i;
    if (i % 3 == 0) value = 'fizz'
    if (i % 5 == 0) value = 'buzz'
    if (i % 3 == 0 && i % 5 == 0) value = 'fizzbuzz'
    
}
document.querySelector("#displayValue").innerHTML = value;