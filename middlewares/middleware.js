const axios = require('axios')

module.exports = {
  googleSign: (req, res, next) => {
    axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.token}`)
    .then(({ data }) => {
      if(data.aud !== process.env.CLIENT_ID) {
        res.status(500).json({
          message: 'client id is not valid'
        })
      } else {
        req.decoded = data
        next()
      }
    })
    .catch(err => {
      res.status(500).json({
        errors: err
      })
    })
  }  
}