let cost = {}

// Food Rent & Cloth Input Section

function myBalanceCalculate() {
    const foodCost = document.getElementById('food-cost');
    const foodCostText = foodCost.value
    const totalFoodAmount = parseInt(foodCostText);

    const rentCost = document.getElementById('rent-cost');
    const rentCostText = rentCost.value
    const totalRentAmount = parseInt(rentCostText);

    const clothCost = document.getElementById('cloth-cost');
    const clothCostText = clothCost.value
    const totalClothAmount = parseInt(clothCostText);



    // Food Rent Cloth Error Section

    const foodError = document.getElementById('error-1')
    if (isNaN(totalFoodAmount) || (totalFoodAmount < 0)) {
        foodError.innerText = "Please Enter A Positive Number !!!!!!"
    }

    const rentError = document.getElementById('error-2')
    if (isNaN(totalRentAmount) || (totalRentAmount < 0)) {
        rentError.innerText = "Please Enter A Positive Number !!!!!!"
    }

    const clothError = document.getElementById('error-3')
    if (isNaN(totalClothAmount) || (totalClothAmount < 0)) {
        clothError.innerText = "Please Enter A Positive Number !!!!!!"
    }



    // Total Expense Section

    const expenseAmount = document.getElementById('total-expense');
    expenseAmount.innerText = totalFoodAmount + totalRentAmount + totalClothAmount



    // My Income Section

    const incomeAmount = document.getElementById('my-income');
    const incomeAmountText = incomeAmount.value
    const totalIncomeAmount = parseInt(incomeAmountText);


    // Income Error

    const incomeError = document.getElementById('error-4')
    if (isNaN(totalIncomeAmount) || (totalIncomeAmount < 0)) {
        incomeError.innerText = "Please Enter A Positive Number !!!!!!"
    }


    const expenseError = document.getElementById('error-6')
    if (totalIncomeAmount < expenseAmount.innerText) {
        expenseError.innerText = "You Chill To Much Than Your Income!!!!!!"
    }


    // Balance Section

    const balanceAmount = document.getElementById('remaining-blc');
    balanceAmount.innerText = totalIncomeAmount - expenseAmount.innerText


    // Add By Another Function

    cost.income = totalIncomeAmount
    cost.balance = balanceAmount.innerText
}



// Calculate Saving Amount & Remaining Amount Section


function savingRemaining() {

    let { income, balance } = cost

    // Saving Percent Section

    const savingPercent = document.getElementById('saving-percent');
    const savingPercentText = savingPercent.value
    const totalsavingPercentAmount = parseFloat(savingPercentText);


    // Saving Amount Section

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = (totalsavingPercentAmount / 100) * income


    // Saving Amount Error Section

    const savingError = document.getElementById('error-5')
    if (balance < savingAmount.innerText) {
        savingError.innerText = "You Don't have Enough Amount To Save!!!!!!"
    }

    // Remaining Amount Section

    const totalRemainingAmount = document.getElementById('remaining-amount')
    totalRemainingAmount.innerText = balance - savingAmount.innerText
}


// Calculate Button Function

document.getElementById('calculate-btn').addEventListener('click', function () {
    myBalanceCalculate()
})

// Saving Button Function

document.getElementById('saving-btn').addEventListener('click', function () {
    savingRemaining()
})
