
// calculate button
document.getElementById('cal-btn').addEventListener('click', function () {
    getInputValue()
})

function getInputValue() {
    const foodInput = document.getElementById('food-input').value;
    const rantInput = document.getElementById('rant-input').value;
    const clothesInput = document.getElementById('colths-input').value;
    const totalIncomeValue = document.getElementById('totalIncome').value
  
    if (totalIncomeValue < 0){
        document.getElementById("income").innerHTML = "**Don't use Negative Number"
        return true;
    }
    if (isNaN(foodInput) ) {
        document.getElementById("food").innerText = "**It's allowed only number"
        return true;
    }
    else if (foodInput < 0) {
        document.getElementById("food").innerText = "**Number will be positive"
        return true;
    }
    
    else if (isNaN(rantInput)) {
        document.getElementById("rant").innerText = "**It's allowed only number"
        return true;
    }

    else  if (rantInput < 0) {
        document.getElementById("rant").innerText = "** Number will be positive"
        return true;
    }
    if (isNaN(clothesInput)) {
        document.getElementById("Clothes").innerText = "** It's allowed only number "
        return true;
    }
   else if (clothesInput < 0) {
        document.getElementById("Clothes").innerText = "** Number will be positive "
        return true;
    }
    else {
        // total expenses 
        const totalExpInputValue = parseFloat(foodInput) +
                                   parseFloat(rantInput) +
                                   parseFloat(clothesInput);
        
        const expenses = document.getElementById('expenses');
        expenses.innerText = totalExpInputValue

      //total balance
        updatebalance('total', totalExpInputValue)
        document.getElementById("food").innerText = ""
        document.getElementById("rant").innerText = ""
        document.getElementById("Clothes").innerText = ""
        document.getElementById("income").innerText = ""

        
    }

}


// save button
document.getElementById('save-btn').addEventListener('click', function () {
    // console.log('save btn is click');
    getSaveAmount();
})

function getSaveAmount() {
    const saveInput = document.getElementById('save-input').value;
    const totalIncome = document.getElementById('totalIncome').value;
    if (saveInput < 0) {
        document.getElementById('save-percentage').innerText = "it's not a valid saving rang"
        return
    }
    else {
        document.getElementById('save-percentage').innerText = ""
 }
    
         const totalSaved = parseFloat(totalIncome) / 100 * parseFloat(saveInput);
    
        //saving Amount
        const remaingBalance = document.getElementById('remaing-balance')
        const totalBalance = document.getElementById('total-balance').innerText
        if (totalBalance < totalSaved) {
            document.getElementById('save').innerText = "You haven't enough money to save"
        
        }
        else {
            // remainig balance
            const saveAmount = document.getElementById('save-amount')
            saveAmount.innerText = totalSaved;
            remaingBalance.innerText = parseFloat(totalBalance) - totalSaved
            document.getElementById('save').innerText = "";
        }
       
    }

function updatebalance(id,totalExpInputValue) {
    const balance = document.getElementById(id + '-balance');
    const totalIncome = document.getElementById(id + 'Income').value;
    if (totalIncome < totalExpInputValue) {
        balance.innerText = parseFloat(totalIncome) - totalExpInputValue;
        document.getElementById('balance').innerText = 'Your balance is over'
       
    }
    else {
        balance.innerText = parseFloat(totalIncome) - totalExpInputValue;
        document.getElementById('balance').innerText = '';
    }

}