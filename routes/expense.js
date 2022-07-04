const express = require('express')
const router = express.Router()
const Expense = require('../models/Expense')

router.get('/', async (req, res) => {
    try {
        const expense = await Expense.find({})
        res.status(200).json({ expense })
    }
    catch (err) {
        res.status(404).send('error: ' + err.message)
    }
})

router.get("/:id", (req, res, next) => {
    Expense.findById(req.params.id).then(expense => {
        if (expense) {
            res.status(200).json(expense);
        }
        else {
            res.status(404).json({ message: "Expense not found" })
        }
    })
})

router.post('/add-expense', async (req, res) => {
    const { title, price, description, category, purchaseDate } = req.body;

    try {
        const expense = await Expense.create({ title, price, description, category, purchaseDate })
        console.log(expense)
        res.status(200).json({ expense })
    }
    catch (err) {
        res.status(404).send('error adding expense');
        console.log(err);
    }
})
module.exports = router;