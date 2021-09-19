// deposit work
document.getElementById("deposit-button").addEventListener("click", function () {
    //  to get the deposit input
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // get and update deposit total
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // Balance update
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    //  clear the string
    depositInput.value = "";
})



// Withdraw 
document.getElementById("withdraw-button").addEventListener("click", function () {
    // Get the withdraw input
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawInputText = withdrawInput.value;
    const newWithdrawInputAmount = parseFloat(newWithdrawInputText);

    // get and update withdrw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = newWithdrawInputAmount + previousWithdrawTotalAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // balance update
    const withdrawBalanceTotal = document.getElementById("balance-total");
    const withdrawBalanceText = withdrawBalanceTotal.innerText;
    const withdrawBalanceAmount = parseFloat(withdrawBalanceText);
    const currentWithdrawBalance = withdrawBalanceAmount - newWithdrawTotal;
    withdrawBalanceTotal.innerText = currentWithdrawBalance;

    // clear string
    withdrawInput.value = "";

})