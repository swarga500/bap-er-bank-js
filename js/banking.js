document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText);
    

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText)
    const newDepositTotal = previousDepositAmount + newdepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newdepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    

// clear input field 
    depositInput.value = '';
})

// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawtext = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawtext);
    const newWithdrawTotal = previousWithdraw + withdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance 
    const balanceTotal =document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalance - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;



// clear withdrawInput 
    withdrawInput.value = '';


})