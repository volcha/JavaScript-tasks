const weight = prompt('Enter your weight in kilograms:');
const height = prompt('Enter your height in meters:');
const bodyMassIndex = weight / height**2;
const isOverweight = bodyMassIndex >= 25;
console.log(bodyMassIndex);
if (!isOverweight) {
    alert('No, your weight is normal');
}
else {
    alert(`Yes, your BMI is more then normal by ${bodyMassIndex - 25}`);
}