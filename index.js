
// calculate button
document.getElementById('cal-btn').addEventListener('click', function () {
    getInputValue()
})

function getInputValue() {
    const foodInput = document.getElementById('food-input').value;
    const rantInput = document.getElementById('rant-input').value;
    const clothesInput = document.getElementById('colths-input').value;
    if (isNaN(foodInput) ) {
        document.getElementById("food").innerHTML = "**It's allowed only number"
        return true;
    }
    else if (foodInput < 0) {
        document.getElementById("food").innerHTML = "**Number will be positive"
        return true;
    }
    
    else if (isNaN(rantInput)) {
        document.getElementById("rant").innerHTML = "**It's allowed only number"
        return true;
    }

    else  if (rantInput < 0) {
        document.getElementById("rant").innerHTML = "** Number will be positive"
        return true;
    }
    if (isNaN(clothesInput)) {
        document.getElementById("Clothes").innerHTML = "** It's allowed only number "
        return true;
    }
   else if (isNaN(clothesInput < 0)) {
        document.getElementById("Clothes").innerHTML = "** Number will be positive "
        return true;
    }
    else {
        const totalExpInputValue = parseFloat(foodInput) +
                                   parseFloat(rantInput) +
            parseFloat(clothesInput);
    
        
        
        const expenses = document.getElementById('expenses');
        expenses.innerText = totalExpInputValue



        
       updatebalance('total', totalExpInputValue)
        
    }
    
   
    
// total expenses  
  

//total balance

}


// save button
document.getElementById('save-btn').addEventListener('click', function () {
    // console.log('save btn is click');
    getSaveAmount();
})

function getSaveAmount() {
    const saveInput = document.getElementById('save-input').value;
    const totalIncome = document.getElementById('totalIncome').value;
    const totalSaved = parseFloat(totalIncome) / 100 * parseFloat(saveInput);
    
    //saving Amount 
    const saveAmount = document.getElementById('save-amount')
    saveAmount.innerText = totalSaved;

    // remainig balance
    const remaingBalance = document.getElementById('remaing-balance')
    const totalBalance = document.getElementById('total-balance').innerText
    remaingBalance.innerText = parseFloat(totalBalance) - totalSaved

}
function updatebalance(id,totalExpInputValue) {
    const balance = document.getElementById(id + '-balance');
    const totalIncome = document.getElementById(id + 'Income').value;
    if (totalIncome > totalExpInputValue) {
        balance.innerText = parseFloat(totalIncome) - totalExpInputValue;
    }
    else {
        document.getElementById('balance').innerText = 'do not have a safficient banalance'
        return true;
    }
}