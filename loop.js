/* var num = 0;
while (num<15) {
    num++;
    console.log(num);
} */

/* for (var i = 0; i < 15; i++) {
    console.log(i);
} */

/* var numberRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numberRandom.length; i++) {
    var element = numberRandom[i];
    console.log(element);
}  */

function primeNumber(number) {
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            return 'Not a prime number';
        }
    }
    return 'Your number is a prime number';
}
var result = primeNumber(137);
console.log(result);
