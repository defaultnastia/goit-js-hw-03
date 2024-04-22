'use strict';

function filterArray(numbers, value) {
  const arrayOfBigValues = [];
  for (const numberElement of numbers) {
    if (numberElement <= value) {
      continue;
    }
    arrayOfBigValues.push(numberElement);
  }
  return arrayOfBigValues;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
