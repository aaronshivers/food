require('dotenv').config()

const express = require('express')
const rp = require('request-promise-any')

const Search = require('./models/search')

const app = express()
const port = process.env.PORT

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('search')
})

app.get('/results', async (req, res) => {
  const { find } = req.query

  const search = new Search(find)

  await search.getResults().then(recipies => {
    res.render('results', { recipies })
  })
})

app.listen(port)
