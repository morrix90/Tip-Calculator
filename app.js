let billAmount =  document.querySelector('.bill-amount');
let personsNumber = document.querySelector('.persons-number');
let tipAmount = document.querySelector('.tipAmount-person');
let totalTip = document.querySelector('.totalTip-persons');

let tip5 = document.querySelector('.tip-button5');
let tip10 = document.querySelector('.tip-button10');
let tip15 = document.querySelector('.tip-button15');
let tip25 = document.querySelector('.tip-button25');
let tip50 = document.querySelector('.tip-button50');


function tipAmountPerson(r,s) {
    tipAmount.innerHTML = `$<span> ${r} </span>`;
    totalTip.innerHTML = `$<span> ${s} </span>`;
}
function tipCalc (tip) {
    let result = tip;
    let total = tip * personsNumber.value;
    tipAmountPerson(result, total);
}


tip5.addEventListener('click', () => {
    let tip = (billAmount.value * 5) / 100;
    tipCalc(tip);    
})

tip10.addEventListener('click', () => {
    let tip = (billAmount.value * 10) / 100;
    tipCalc(tip);
})

tip15.addEventListener('click', () => {
    let tip = (billAmount.value * 15) / 100;
    tipCalc(tip);
})

tip25.addEventListener('click', () => {
    let tip = (billAmount.value * 25) / 100;
    tipCalc(tip);
})

tip50.addEventListener('click', () => {
    let tip = (billAmount.value * 50) / 100;
    tipCalc(tip);
})

