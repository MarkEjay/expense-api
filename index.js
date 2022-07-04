const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const expenseRoutes = require('./routes/expense')


app.use(cors())
app.use(express.json());
const db = process.env.dbUrl
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to db'))
    .catch(err => console.log(err))

app.listen(5000, () => console.log('listening on port 5000'))

app.get('/main', (req, res) => {
    res.send('Hello World')
})

app.use('/expense', expenseRoutes)