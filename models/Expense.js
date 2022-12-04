const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    title: {
        type: String, require: true
    },
    price: {
        type: Number, require: true
    },
    category: {
        type: String, require: true
    },
    description: {
        type: String
    },
    purchaseDate: {
        type: Date
    }
})

expenseSchema.post('save', (doc, next) => {
    console.log('Expense Added', doc)
    next()
});


const Expense = mongoose.model('expense', expenseSchema);
module.exports = Expense;