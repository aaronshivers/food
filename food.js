require('dotenv').config()

const express = require('express')
const rp = require('request-promise-any')

const Search = require('./models/search')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  const search = new Search('tacos')

  search.getResults().then(recipies => {
    res.send(recipies)
  // res.render('index')
  })
})

app.listen(port)
