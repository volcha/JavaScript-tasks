'use strict';

const infoJack = {
    name: 'Jack',
    lastname: 'White',
    weight: 79,
    height: 1.7,
    calcBMI: function() {
        this.BMI = this.weight / this.height**2;
        return this.BMI;
    }
};

const infoMike = {
    name: 'Mike',
    lastname: 'Black',
    weight: 91,
    height: 1.93,
    calcBMI: function() {
        this.BMI = this.weight / this.height**2;
        return this.BMI;
    }
};

if (infoJack.calcBMI() != infoMike.calcBMI()) {
    console.log(`${infoJack.name} ${infoJack.lastname} BMI (${infoJack.BMI.toPrecision(3)}) is ${infoJack.BMI > infoMike.BMI ? 'higher' : 'lower'} then ${infoMike.name} ${infoMike.lastname} (${infoMike.BMI.toPrecision(3)})`);
}
else {
    console.log(`${infoJack.name} ${infoJack.lastname} and ${infoMike.name} ${infoMike.lastname} BMIs are equal (${infoMike.BMI.toPrecision(3)})`);
}