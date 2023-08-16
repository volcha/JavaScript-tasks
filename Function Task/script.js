'use strict';

const dep1SalesJan = 35467;
const dep1SalesFeb = 29842;
const dep1SalesMar = 38501;
const dep2SalesJan = 70533;
const dep2SalesFeb = 50121;
const dep2SalesMar = 33899;

const dep1SalesApr = 50301;
const dep1SalesMay = 21984;
const dep1SalesJun = 19207;
const dep2SalesApr = 72381;
const dep2SalesMay = 41562;
const dep2SalesJun = 29465;

const getAverage = (sales1, sales2, sales3) => (sales1 + sales2 + sales3) / 3;

function printBonus(dep1AverSales, dep2AverSales) {
    if (dep1AverSales > dep2AverSales) {
        const percentage = (dep1AverSales - dep2AverSales) / dep2AverSales * 100;
        if (percentage >= 30) {
            console.log(`Dept 1 will get a bonus of ${percentage}%`);
        }
        else {
            console.log('No bonus in this quarter');
        }
    }
    else if (dep1AverSales < dep2AverSales) {
        const percentage = (dep2AverSales - dep1AverSales) / dep1AverSales * 100;
        if (percentage >= 30) {
            console.log(`Dept 2 will get a bonus of ${percentage}%`);
        }
        else {
            console.log('No bonus in this quarter');
        }
    }
    else {
        console.log('No bonus in this quarter');
    }
}

const dep1Quarter1Average = getAverage(dep1SalesJan, dep1SalesFeb, dep1SalesMar);
const dep2Quarter1Average = getAverage(dep2SalesJan, dep2SalesFeb, dep2SalesMar);
const dep1Quarter2Average = getAverage(dep1SalesApr, dep1SalesMay, dep1SalesJun);
const dep2Quarter2Average = getAverage(dep2SalesApr, dep2SalesMay, dep2SalesJun);

console.log('In the first quarter');
printBonus(dep1Quarter1Average, dep2Quarter1Average);

console.log('In the second quarter');
printBonus(dep1Quarter2Average, dep2Quarter2Average);