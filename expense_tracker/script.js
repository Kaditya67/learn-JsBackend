// with localstorage
document.addEventListener('DOMContentLoaded', () => {
    let localExpenseList = JSON.parse(localStorage.getItem('expenseList')) || [];
    let total = parseInt(localStorage.getItem('total')) || 0;

    const expenseForm = document.querySelector('.expense-form');
    const expenses = document.querySelector('.expenses ul');
    const totalValueElement = document.querySelector('.total-value');

    // Initially render the stored data
    renderExpenses();
    updateTotalDisplay();
    if (expenses.children.length === 0) {
        document.querySelector('.total').classList.add('hidden');
        document.querySelector('.expenses').classList.add('hidden');
    }

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const expense = document.getElementById('expense').value;
        const amount = document.getElementById('amount').value;

        if (expense && amount && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name: expense,
                amount: parseInt(amount),
            };

            localExpenseList.push(newExpense);
            localStorage.setItem('expenseList', JSON.stringify(localExpenseList));
            document.getElementById('expense').value = "";
            document.getElementById('amount').value = "";

            addExpense(newExpense);
            updateTotal(newExpense.amount);
        }
    });

    function renderExpenses() {
        expenses.innerHTML = ""; 
        localExpenseList.forEach(expense => addExpense(expense));
    }

    function addExpense(expense) { 
        document.querySelector('.total').classList.remove('hidden');
        document.querySelector('.expenses').classList.remove('hidden');

        const div = document.createElement('div');
        div.classList.add('expense');
        div.innerHTML = `
            <li>${expense.name}</li>
            <li>${expense.amount}</li>
            <button type="button" id="${expense.id}">Delete</button>
        `;
        expenses.appendChild(div);
    }

    function updateTotal(amount) {
        total += parseInt(amount);
        localStorage.setItem('total', total);
        updateTotalDisplay();
    }

    function updateTotalDisplay() {
        totalValueElement.innerText = `${total}`;
    }

    expenses.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const expenseId = parseInt(e.target.id);
            const expenseAmount = parseInt(e.target.parentElement.children[1].innerText);

            // Remove expense from UI
            e.target.parentElement.remove();

            // Update total
            total -= expenseAmount;
            localStorage.setItem('total', total);
            updateTotalDisplay();

            // Remove expense from local storage
            localExpenseList = localExpenseList.filter(expense => expense.id !== expenseId);
            localStorage.setItem('expenseList', JSON.stringify(localExpenseList));

            // Hide sections if no expenses remain
            if (expenses.children.length === 0) {
                document.querySelector('.total').classList.add('hidden');
                document.querySelector('.expenses').classList.add('hidden');
            }
        }
    });
});


// // Without localStorage
// document.addEventListener('DOMContentLoaded', () => {
//     expenseForm = document.querySelector('.expense-form');
//     expenseForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const expense = document.getElementById('expense').value;
//         const amount = document.getElementById('amount').value;
//         addExpense(expense, amount);
//         document.getElementById('expense').value = "";
//         document.getElementById('amount').value = "";
//     })

//     expenses = document.querySelector('.expenses ul');
//     var total = 0;
    
    
//     if(expenses.children.length === 0) {
//         document.querySelector('.total').classList.add('hidden');
//         document.querySelector('.expenses').classList.add('hidden');
//     }
//     function addExpense(expense, amount) {
//         if(document.querySelector('.total').classList.contains('hidden')){
//             document.querySelector('.total').classList.remove('hidden');
//             document.querySelector('.expenses').classList.remove('hidden');
//         }
//         const div = document.createElement('div');
//         div.classList.add('expense');
//         div.innerHTML = `
//             <li>${expense}</li>
//             <li>${amount}</li>
//             <button type="button">Delete</button>
//         `;
//         expenses.appendChild(div);  
//         updateTotal(amount);
//     }

//     function updateTotal(amount) {
//         total += parseInt(amount);
//         document.querySelector('.total-value').innerText = `${total}`;
//     }

//     expenses.addEventListener('click', (e) => {
//         if (e.target.tagName === 'BUTTON') { 
//             e.target.parentElement.remove();
//             total -= parseInt(e.target.parentElement.children[1].innerText);
//             document.querySelector('.total-value').innerText = `${total}`;
//             if(expenses.children.length === 0) {
//                 document.querySelector('.total').classList.add('hidden');
//                 document.querySelector('.expenses').classList.add('hidden');
//             }
//         }
//     })

// })