// сумма изначально будет равняться a * -1, чтобы убрать само число a из суммы
// к примеру для a=-2 и b=5 суммироваться будут числа -1 +1 +2 +3 +4 
let a = -2, b = 5, sum = a * -1, odd = '';
while (a < b) { 
  sum += a;
  a += 1;
  if (Math.abs(a) % 2 == 1 && a != b) {
    odd += String(a) + ' '
  }
}
console.log('Odd numbers:', odd);
console.log('Sum of numbers between A and B:', sum);
