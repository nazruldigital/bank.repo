// function dubbleIt(num) {
//     const result = num * 2;
//     return result;
// }
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const amountValue = parseFloat(inputField.value);
    // clear input field
    inputField.value = '';
    return amountValue;

}

function updateTotalField(totalFieldId, amoutn) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const previousTotal = parseFloat(totalElement.innerText);
    totalElement.innerText = previousTotal + amoutn;
}

function getCurrentBalence() {
    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalText = parseFloat(balenceTotal.innerText);
    return balenceTotalText;
}

function updateBalence(amount, isAdd) {
    const balenceTotal = document.getElementById('balence-total');
    /* 
    const balenceTotalText = parseFloat(balenceTotal.innerText); 
    */
    const balenceTotalText = getCurrentBalence()
    if (isAdd == true) {
        balenceTotal.innerText = amount + balenceTotalText;
    }
    else {
        balenceTotal.innerText = balenceTotalText - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {

    // get deposit input
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmount = parseFloat(depositInput.value);

    // get and update deposit total
    /*
     const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = parseFloat(depositTotal.innerText);
    depositTotal.innerText = depositTotalText + depositAmount; 
    */

    // update Balence
    /*
    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalText = parseFloat(balenceTotal.innerText);
    balenceTotal.innerText = depositAmount + balenceTotalText; 
    */

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalence(depositAmount, true);
    }

});

// handle withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {

    // get withdraw input 
    /* 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);
     */

    // get and update withdraw total 
    /* 
    const withdrawTotalText = document.getElementById('withdraw-total');
    const withdrawTotal = parseFloat(withdrawTotalText.innerText);
    withdrawTotalText.innerText = withdrawTotal + withdrawAmount; 
    */

    // update balence 
    /*
    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalText = parseFloat(balenceTotal.innerText);
    balenceTotal.innerText = balenceTotalText - withdrawAmount;
    */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalence = getCurrentBalence()
    if (withdrawAmount > 0 && withdrawAmount < currentBalence) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalence(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalence) {
        console.log('You do not have enoufe balence. ');
    }

})










