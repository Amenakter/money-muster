
// calculate button
document.getElementById('cal-btn').addEventListener('click', function () {
    getInputValue()
})

function getInputValue() {
    const foodInput = document.getElementById('food-input').value;
    const rantInput = document.getElementById('rant-input').value;
    const clothesInput = document.getElementById('colths-input').value;
    
    const totalExpInputValue = parseFloat(foodInput) +
    parseFloat(rantInput) +
    parseFloat(clothesInput);
    
// total expenses  
  const expenses = document.getElementById('expenses');
  expenses.innerText = totalExpInputValue

//total balance
 updatebalance('total',totalExpInputValue )
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
    const totalIncome = document.getElementById(id +'Income').value;
    balance.innerText = parseFloat(totalIncome) - totalExpInputValue;
}