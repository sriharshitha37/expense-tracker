// Data structures
let expenses = []; // Array to hold all expenses
let categoryMap = new Map(); // Category-wise expense storage
let dateMap = new Map(); // Date-wise expense storage

// DOM Elements
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalExpensesEl = document.getElementById('total-expenses');

// Filter DOM Elements
const filterStartDate = document.getElementById('filter-start-date');
const filterEndDate = document.getElementById('filter-end-date');
const filterCategory = document.getElementById('filter-category');
const applyFiltersButton = document.getElementById('apply-filters');
const clearFiltersButton = document.getElementById('clear-filters');

// Sorting Buttons
const sortDateButton = document.getElementById('sort-date');
const sortAmountButton = document.getElementById('sort-amount');
const sortCategoryButton = document.getElementById('sort-category');

// Add Expense
expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value.trim();
    const description = document.getElementById('description').value.trim();

    const expense = { date, amount, category, description };
    expenses.push(expense);

    // Update categoryMap and dateMap
    updateDataStructures(expense);

    // Update UI
    renderExpenses(expenses);
    updateTotal();
    expenseForm.reset();
});

// Update Data Structures
function updateDataStructures(expense) {
    // Update categoryMap
    if (!categoryMap.has(expense.category)) {
        categoryMap.set(expense.category, []);
    }
    categoryMap.get(expense.category).push(expense);

    // Update dateMap
    if (!dateMap.has(expense.date)) {
        dateMap.set(expense.date, []);
    }
    dateMap.get(expense.date).push(expense);
}

// Render Expenses
function renderExpenses(expenseArray) {
    expenseList.innerHTML = '';
    expenseArray.forEach((expense, index) => {
        const row = `
            <tr>
                <td>${expense.date}</td>
                <td>₹${expense.amount.toFixed(2)}</td>
                <td>${expense.category}</td>
                <td>${expense.description || '-'}</td>
                <td><button onclick="deleteExpense(${index})">Delete</button></td>
            </tr>`;
        expenseList.innerHTML += row;
    });
}

// Update Total
function updateTotal() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalExpensesEl.textContent = total.toFixed(2);
}

// Delete Expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses(expenses);
    updateTotal();
}

// Filter Expenses
function applyFilters() {
    let filteredExpenses = [...expenses];

    const startDate = filterStartDate.value;
    const endDate = filterEndDate.value;
    const category = filterCategory.value.trim().toLowerCase();

    // Filter by date range
    if (startDate) {
        filteredExpenses = filteredExpenses.filter(expense => expense.date >= startDate);
    }
    if (endDate) {
        filteredExpenses = filteredExpenses.filter(expense => expense.date <= endDate);
    }

    // Filter by category
    if (category) {
        filteredExpenses = filteredExpenses.filter(expense => expense.category.toLowerCase().includes(category));
    }

    renderExpenses(filteredExpenses);
}

// Clear Filters
function clearFilters() {
    filterStartDate.value = '';
    filterEndDate.value = '';
    filterCategory.value = '';
    renderExpenses(expenses);
}

// Sorting Functions
function sortByDate() {
    const sortedExpenses = [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date));
    renderExpenses(sortedExpenses);
}

function sortByAmount() {
    const sortedExpenses = [...expenses].sort((a, b) => a.amount - b.amount);
    renderExpenses(sortedExpenses);
}

function sortByCategory() {
    const sortedExpenses = [...expenses].sort((a, b) => a.category.localeCompare(b.category));
    renderExpenses(sortedExpenses);
}

// Event Listeners for Filters and Sorting
applyFiltersButton.addEventListener('click', applyFilters);
clearFiltersButton.addEventListener('click', clearFilters);
sortDateButton.addEventListener('click', sortByDate);
sortAmountButton.addEventListener('click', sortByAmount);
sortCategoryButton.addEventListener('click', sortByCategory);

