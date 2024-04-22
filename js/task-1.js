'use strict';

function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalCredits = quantity * pricePerDroid;
  if (customerCredits < totalCredits) {
    return 'Insufficient funds!';
  } else if (customerCredits >= totalCredits) {
    return `You ordered ${quantity} droids worth ${totalCredits} credits!`;
  } else {
    return 'It is over, Anakin. I have the high ground.'; //improvement, error handler
  }
}

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// Error handler, uncomment to check:
// console.log(makeTransaction(5, 3000, undefined));
