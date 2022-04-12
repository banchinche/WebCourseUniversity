const volumeCylinder = (radius, height) => Math.PI * radius ** 2 * height
const areaCylinder = (radius, height) => 2 * Math.PI * radius * (radius + height)

console.log(volumeCylinder(1, 1))
console.log(areaCylinder(1, 1))
