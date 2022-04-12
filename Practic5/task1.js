let x = 6, y = 15, z = 4;

x += y - x++ * z;
z = --x - y * 5;
y /= x + 5 % z;
z = x++ + y * 5;
x = y - x++ * z; 

console.log(x);
console.log(z);
console.log(y);
console.log(z);
console.log(x);
