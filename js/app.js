let cost = {}

// Food Rent & Cloth Input Section

function myBalanceCalculate(food, rent, cloth, income, remainingBlc) {
    const foodCost = document.getElementById('food-cost');
    const foodCostText = foodCost.value
    const totalFoodAmount = parseInt(foodCostText);

    const rentCost = document.getElementById('rent-cost');
    const rentCostText = rentCost.value
    const totalRentAmount = parseInt(rentCostText);

    const clothCost = document.getElementById('cloth-cost');
    const clothCostText = clothCost.value
    const totalClothAmount = parseInt(clothCostText);


    // Total Expense Section

    const expenseAmount = document.getElementById('total-expense');
    expenseAmount.innerText = totalFoodAmount + totalRentAmount + totalClothAmount


    // My Income Section

    const incomeAmount = document.getElementById('my-income');
    const incomeAmountText = incomeAmount.value
    const totalIncomeAmount = parseInt(incomeAmountText);


    // Balance Section

    const balanceAmount = document.getElementById('remaining-blc');
    balanceAmount.innerText = totalIncomeAmount - expenseAmount.innerText


    // Add By Another Function

    cost.income = totalIncomeAmount
    cost.balance = balanceAmount.innerText
}



// Calculate Saving Amount & Remaining Amount Section

function savingRemaining(percent, save) {

    let { income, balance } = cost

    // Saving Percent Section

    const savingPercent = document.getElementById('saving-percent');
    const savingPercentText = savingPercent.value
    const totalsavingPercentAmount = parseFloat(savingPercentText);

    // Saving Amount Section

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = (totalsavingPercentAmount / 100) * income

    // Remaining Amount Section

    const totalRemainingAmount = document.getElementById('remaining-amount')
    totalRemainingAmount.innerText = balance - savingAmount.innerText
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    myBalanceCalculate(1, 1, 1, 1, 1)
})

document.getElementById('saving-btn').addEventListener('click', function () {
    savingRemaining(1, 1)
})
