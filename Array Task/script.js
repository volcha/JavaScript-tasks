const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;

const bills = [11, 20, 47];

const tips = [];
tips.push(calculateTips(bills[0]));
tips.push(calculateTips(bills[1]));
tips.push(calculateTips(bills[2]));
console.log(tips);

const check = [];
check.push(bills[0] + tips[0]);
check.push(bills[1] + tips[1]);
check.push(bills[2] + tips[2]);
console.log(check);