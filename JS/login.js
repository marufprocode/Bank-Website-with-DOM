const btnSubmit = document.getElementById('submit-btn');
btnSubmit.addEventListener('click', function(){
    const userEmailField = document.getElementById('email-field');
    const userPassField = document.getElementById('pass-field');
    if(userEmailField.value === 'mybank@dom.com' && userPassField.value === 'Secret'){
        window.location.href = "./bank.html"
    }
    else{
        alert ("Please Input Valid Login Info")
    }
})