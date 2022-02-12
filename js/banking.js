// function dubbleIt(num) {
//     const result = num * 2;
//     return result;
// }
function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositAmount = parseFloat(depositInput.value);
    // clear input field
    depositInput.value = '';
    return depositAmount;

}


document.getElementById('deposit-button').addEventListener('click', function () {

    // get deposit input
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmount = parseFloat(depositInput.value);
    const depositAmount = getInputValue('deposit-input')

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = parseFloat(depositTotal.innerText);
    depositTotal.innerText = depositTotalText + depositAmount;

    // update Balence
    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalText = parseFloat(balenceTotal.innerText);
    balenceTotal.innerText = depositAmount + balenceTotalText;




});

// handle withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {

    // get withdraw input 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);

    // get current withdraw 
    const withdrawTotalText = document.getElementById('withdraw-total');
    const withdrawTotal = parseFloat(withdrawTotalText.innerText);
    withdrawTotalText.innerText = withdrawTotal + withdrawAmount;

    // update balence 
    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalText = parseFloat(balenceTotal.innerText);
    balenceTotal.innerText = balenceTotalText - withdrawAmount;

    // clear withdraw 
    withdrawInput.value = '';





})
















