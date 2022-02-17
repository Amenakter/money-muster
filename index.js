document.getElementById('cal-btn').addEventListener('click', function () {
    getInputValue()
})

document.getElementById('save-btn').addEventListener('click', function () {
    // console.log('save btn is click');
    getSaveAmount();

    // console.log(saveInput);
})
function getInputValue() {
    const foodInput = document.getElementById('food-input').value;
    const rantInput = document.getElementById('rant-input').value;
    const clothesInput = document.getElementById('colths-input').value;
    
    const totalExpInputValue = parseFloat(foodInput) +
    parseFloat(rantInput) +
    parseFloat(clothesInput);
    
//  total expenses  
  const expenses = document.getElementById('expenses');
  expenses.innerText = totalExpInputValue

//total balance
 updatebalance('total',totalExpInputValue )
}
 
function updatebalance(id,totalExpInputValue) {
    const balance = document.getElementById(id + '-balance');
    const totalIncome = document.getElementById('income-input').value;
    balance.innerText = parseFloat(totalIncome) - totalExpInputValue;
}
function getSaveAmount() {
    const saveInput = document.getElementById('save-input').value;
    const totalIncome = document.getElementById('income-input').value;
    const totalSaved = parseFloat(totalIncome) / 100 * parseFloat(saveInput);

    const saveAmount = document.getElementById('save-amount')
    saveAmount.innerText = totalSaved;
    console.log(totalSaved)

    // remainig balance
    updatebalance('remaing',totalSaved)

}