const btnDeposit = document.getElementById('btn-deposit');
btnDeposit.addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    //Data Validation
    if(depositField.value<0 || isNaN(parseFloat(depositField.value))){
        depositField.value = '';
        alert ('Please Input Valid Amount');
        return;
    }
    // Deposit Money and change on deposited amount
    const depositedRef = document.getElementById('deposited');
    depositedRef.innerText = parseFloat(depositedRef.innerText)+parseFloat(depositField.value);

    // Deposit Money and change on Account Balance.
    const accBalanceRef = document.getElementById('acc-balance');
    accBalanceRef.innerText = parseFloat(accBalanceRef.innerText) + parseFloat(depositField.value);
    depositField.value = '';
})

const withdrawBtn = document.getElementById('btn-withdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmountField = document.getElementById('withdraw-field');
    const accountBalance = document.getElementById('acc-balance');
    //Data Validation
    
    if(parseFloat(withdrawAmountField.value)>parseFloat(accountBalance.innerText)){
        alert ('You do not sufficient balance for withdraw');
        withdrawAmountField.value = '';
        return;
    }
    else if(withdrawAmountField.value<0 || isNaN(parseFloat(withdrawAmountField.value))){
        alert ('Please Input Valid Amount');
        withdrawAmountField.value = '';
        return;
    }
    // Withdraw Money and change on Account withdrawInfo.
    const withdrawnAmount = document.getElementById('withdrawn');
    withdrawnAmount.innerText = parseFloat(withdrawnAmount.innerText)+parseFloat(withdrawAmountField.value);

    // Withdraw Money and change on Account Balance Info.
    accountBalance.innerText = parseFloat(accountBalance.innerText) - parseFloat(withdrawAmountField.value);
    withdrawAmountField.value = '';
})
