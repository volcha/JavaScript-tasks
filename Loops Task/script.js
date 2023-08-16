'use strict';

function calculateTips(bill) {
    return bill < 20 ? bill * 0.2 : bill * 0.15;
}

function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; ++i) {
    tips.push(calculateTips(bills[i]));
    totals.push(bills[i] + tips[i]);
    console.log (bills[i], tips[i], totals[i]);
}

console.log(`Average of bills = ${calculateAverage(bills)}`);
console.log(`Average of bills = ${calculateAverage(tips)}`);
console.log(`Average of bills = ${calculateAverage(totals)}`);