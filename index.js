const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const expenseRoutes = require('./routes/expense')


app.use(cors())
app.use(express.json());
const db = process.env.dbUrl

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5005;
mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log('connected to db'))
    .catch(err => console.log(err))

app.listen(port, () => console.log('listening on port 5005'))

app.get('/main', (req, res) => {
    res.send('Hello World')
})

app.use('/expense', expenseRoutes)