require('dotenv').config()

const express = require('express')
const rp = require('request-promise-any')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

// app.get('/', (req, res) => res.render('index'))

const { YOUR_APP_ID } = process.env
const { YOUR_APP_KEY } = process.env

app.get('/', (req, res) => {

  const getResults = async (query) => {
    try {
      const queryEncoded = (encodeURIComponent(query))
      const options = {
        url: `https://api.edamam.com/search?q=${queryEncoded}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`,
        json: true
      }
      const res = await rp(options)
      // const json = await res.json()
      return recipies = res.hits
    } catch (error) {
      console.log(error)
    }
  }

  getResults('pizza').then(recipies => {
    res.send(recipies)
  // res.render('index')
  })
})

app.listen(port)
