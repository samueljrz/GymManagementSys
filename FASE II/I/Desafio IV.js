const user = {
    name: "Mariana",
    transactions: [],
    balance: 0,

    createTransaction(transaction) {
        this.transactions.push(transaction)
        if(transaction.type == "credit") {
            this.balance += transaction.value
        }else {
            this.balance -= transaction.value
        }
    },

    getHigherTransactionByType(type) {
        let actual;
        let valueac=0;
        
        for(transaction of this.transactions) {
            if(transaction.type == type && transaction.value > valueac) {
                 valueac = transaction.value
                 actual = transaction
            }
        }
        console.log(actual)
    },

    getAverageTransactionValue() {
        let total = 0;
        for(transaction of this.transactions) {
            total += transaction.value;
        }
        console.log(total / this.transactions.length)
    },

    getTransactionsCount() {
        let deb=0, cre=0;
        for(transaction of this.transactions) {
            if(transaction.type == 'credit') cre++;
            else deb++;
        }
        console.log({credit: cre, debit: deb})
    }
};

user.createTransaction({ type: "credit", value: 50 });
user.createTransaction({ type: "credit", value: 120 });
user.createTransaction({ type: "debit", value: 80 });
user.createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

user.getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
user.getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

user.getAverageTransactionValue(); // 70

user.getTransactionsCount(); // { credit: 2, debit: 2 }