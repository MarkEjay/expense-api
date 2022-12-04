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
            console.log("hellow")
        }
        else {
            res.status(404).json({ message: "Expense not found" })
        }
    })
})
// app.put('/quotes', (req, res) => {
//     quotesCollection.findOneAndUpdate(/* ... */)
//       .then(result => {
//          res.json('Success')
//        })
//       .catch(error => console.error(error))
//   }

//delete api



router.delete("/:id", (req, res, next) => {
    Expense.findByIdAndDelete(req.params.id).then(expense => {
        if (expense) {
            res.status(200).json(expense);
        }
        else {
            res.status(404).json({ message: "Expense not found" })
        }
    })
})


router.get("/category/housing", (req, res) => {

    Expense.find({ category: 'housing' }).then(expense => {
        if (expense) {
            res.status(200).json(expense);
        }
        else {
            res.status(404).json({ message: "Expense not found" })
        }
    })
})

router.get("/category/transportation", (req, res) => {

    Expense.find({ category: 'transportation' }).then(expense => {
        if (expense) {
            res.status(200).json(expense);
        }
        else {
            res.status(404).json({ message: "Expense not found" })
        }
    })
})


router.get("/category/food", (req, res) => {

    Expense.find({ category: 'food' }).then(expense => {
        if (expense) {
            res.status(200).json(expense);
        }
        else {
            res.status(404).json({ message: "Expense not found" })
        }
    })
})

router.get("/category/medical", (req, res) => {

    Expense.find({ category: 'medical' }).then(expense => {
        if (expense) {
            res.status(200).json(expense);
        }
        else {
            res.status(404).json({ message: "Expense not found" })
        }
    })
})


router.get("/category/entertainment", (req, res) => {

    Expense.find({ category: 'entertainment' }).then(expense => {
        if (expense) {
            res.status(200).json(expense);
        }
        else {
            res.status(404).json({ message: "Expense not found" })
        }
    })
})

router.get("/category/travel", (req, res) => {

    Expense.find({ category: 'travel' }).then(expense => {
        if (expense) {
            res.status(200).json(expense);
        }
        else {
            res.status(404).json({ message: "Expense not found" })
        }
    })
})

router.get("/category/clothing", (req, res) => {

    Expense.find({ category: 'clothing' }).then(expense => {
        if (expense) {
            res.status(200).json(expense);
        }
        else {
            res.status(404).json({ message: "Expense not found" })
        }
    })
})

router.get("/category/others", (req, res) => {

    Expense.find({ category: 'others' }).then(expense => {
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

router.put("/:id", (req, res, next) => {
    const { title, price, description, category, purchaseDate } = req.body;
    // Expense.findByIdAndUpdate(req.params.id,
    //     { title, price, description }).then(expense => {
    //         res.status(200).json(expense);
    //     })
    Expense.findById(req.params.id).then(expense => {
        if (expense) {
            expense.title = req.body.title;
            expense.price = req.body.price;
            expense.description = req.body.description;
            expense.category = req.body.category;
            expense.purchaseDate = req.body.purchaseDate;
            expense.save();
            console.log(req.body.title)
            // expense.title = req.body.title;
            res.status(200).json(expense);
        }
        else {
            res.status(404).json({ message: "Expense not found" })
        }
    })
})

//get data by month
// router.get("/getDate/", (req, res) => {


//     Expense.find({ purchaseDate: ISODate("2022-08-03") }).then(expense => {
//         if (expense) {
//             res.status(200).json(expense);
//         }
//         else {
//             res.status(404).json({ message: "Expense not found" })
//         }
//     })
// })
module.exports = router;