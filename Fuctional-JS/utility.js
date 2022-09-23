function getElementValueById(elementID){
    const elementValueInNumber = parseFloat(document.getElementById(elementID).innerText);
    return elementValueInNumber;
}

function getInputValueById(inputID){
    const inputField = document.getElementById(inputID);
    const inputValueInNumber = parseFloat(inputField.value);
    inputField.value = '';
    return inputValueInNumber;
}

function setElementValueById(elementID, value){
    const element = document.getElementById(elementID);
    element.innerText = value;
}