💰#**Expense Tracker**

A simple yet powerful Expense Tracker web application designed to help you track and manage your daily expenses. Built with HTML, CSS, JavaScript, and utilizing Data Structures and Algorithms for efficient management of expense data.

✨##**Features**

📝 **Track Expenses**: Add, update, and delete your expenses.

📂 **Categorize Expenses**: Classify expenses into categories such as Food, Transportation, Utilities, etc.

🔄 **Sorting and Filtering**: Sort your expenses by date, amount, or category, and filter them based on custom criteria.

📊 **Data Visualization**: View an interactive summary of your expenses through charts.

🎯 **Budget Management**: Set a monthly budget and track your expenses against the budget.

🔧 ##**Technologies Used**

**Frontend**:

🌐 HTML

🎨 CSS

⚙️ JavaScript

**Data Structures and Algorithms**:

📋 Arrays

🔗 Linked Lists (for efficient addition/removal of expenses)

🔄 Sorting algorithms (for sorting expenses based on amount, date, etc.)

🕵️‍♀️ Filtering algorithms (for filtering based on categories, date range, etc.)

🌐 ##**Live Demo**

Check out the live application here: [Expense Tracker](smartbudgetbuddy.netlify.app)

🚀 ##**Installation**

**Clone the repository**:
Open your terminal/command prompt and run the following command:
```
git clone https://github.com/sriharshithab37/expense-tracker.git
```

**Navigate to the project directory**:
```
cd expense-tracker
```

🛠️##**Usage**

➕ **Add Expense**: Click the "Add Expense" button to enter the details of an expense, including category, amount, and date.

✏️ **Update Expense**: Modify any added expense by clicking on the expense entry.

❌ **Delete Expense**: Remove any unnecessary expenses from your records.

🔃 **Sort Expenses**: Use the sorting dropdown to arrange the entries by category, amount, or date.

🔍 **Filter Expenses**: Use the filter dropdown to view only certain categories or date ranges.

📚 ##**How It Works**

**Adding Expenses**:
When you enter expense details, the app stores the information in an array. Each expense is represented as an object containing fields like amount, date, and category.
```javascript
const expense = {
    amount: 100,
    date: '2024-12-21',
    category: 'Food'
};
expenses.push(expense);
```

**Sorting Expenses**:
Sorting algorithms are applied to arrange the array based on the selected criteria (e.g., date, amount). Efficient sorting methods like Quick Sort or Merge Sort ensure smooth performance.
```javascript
expenses.sort((a, b) => a.amount - b.amount); // Sort by amount
```

**Filtering Expenses**:
Filters are implemented using algorithms that iterate through the array to match specific conditions (e.g., category or date range) and return the filtered results.
```javascript
const filteredExpenses = expenses.filter(expense => expense.category === 'Food');
Linked Lists for Dynamic Data:
Linked Lists are used internally to handle dynamic addition and removal of expenses, ensuring that the app performs well even with frequent updates.
```

**Budget Tracking**:
The app calculates the total expenses for the month and compares it against the user-defined budget, providing warnings if the budget limit is exceeded.
```javascript
const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
if (totalExpenses > monthlyBudget) {
    alert('Budget Exceeded!');
}
```

🔮 ##**Future Enhancements**

🔐 **User Authentication**: Allow users to create accounts and save their expense data across sessions, making it accessible from any device.

📱 **Mobile App**: Convert the web app into a mobile application using frameworks like React Native or Flutter.

💾 **Data Persistence**: Implement a database or local storage to persist expenses across browser sessions, allowing the app to retain data even after closing the browser.

📈 **Expense Trends Visualization**: Add a graph to visualize trends in expenses over time, helping users better manage their spending.

📬##**Contact**

Feel free to reach out for collaboration or feedback:
- **Email**: sriharshitha.b06@gmail.com
- **GitHub**: [sriharshithab37](https://github.com/sriharshithab37)
- **LinkedIn**: [Sriharshitha B](https://linkedin.com/in/sri-harshitha-b-8a1a8830a)








