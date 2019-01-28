const rp = require('request-promise-any')

const { YOUR_APP_ID } = process.env
const { YOUR_APP_KEY } = process.env

class Search {
  constructor(query) {
    this.query = query
  }

  async getResults (query) {
    try {
      const queryEncoded = (encodeURIComponent(this.query))
      const options = {
        url: `https://api.edamam.com/search?q=${queryEncoded}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`,
        json: true
      }
      const res = await rp(options)
      return this.result = res.hits
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = Search
