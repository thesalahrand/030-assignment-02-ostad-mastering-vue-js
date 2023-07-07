const getLargestNumber = (a, b) => (a >= b && a) || (a < b && b)

console.log(getLargestNumber(10, 5))
console.log(getLargestNumber(10, 10))
console.log(getLargestNumber(5, 10))
