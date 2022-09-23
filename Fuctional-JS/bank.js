//Btn-deposit functionality

document.getElementById("btn-deposit").addEventListener('click', function(){
    const inputDepositAmount = getInputValueById('deposit-field')
    if(inputDepositAmount<0 || isNaN(inputDepositAmount)){
        alert ("Please Input a valid number");
        return;
    }
    const newDepositedAmount =  getElementValueById('deposited')+ inputDepositAmount;
    setElementValueById('deposited', newDepositedAmount);
    const newAccBalance = getElementValueById('acc-balance')+inputDepositAmount;
    setElementValueById('acc-balance', newAccBalance);
})

//Btn-Withdraw functionality
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputWithdrawAmount = getInputValueById('withdraw-field'); 
    const accBalance = getElementValueById('acc-balance');
    if(inputWithdrawAmount<0 || isNaN(inputWithdrawAmount)){
        alert ("Please Input a valid number");
        return;
    }
    else if(inputWithdrawAmount>accBalance){
        alert ("You do not have sufifcient Balance, Please Input a valid amount");
        return;
    }
    const newAccWithdrawAmount = getElementValueById('withdrawn')+inputWithdrawAmount;
    setElementValueById('withdrawn', newAccWithdrawAmount);
    const newAccBalance = accBalance - inputWithdrawAmount;
    setElementValueById('acc-balance', newAccBalance);
})