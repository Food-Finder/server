const axios = require('axios')

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports = {
  googleSign: (req, res, next) => {
    console.log(req.body);
    axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.token}`)
    .then(({ data }) => {
      console.log(data)
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
      console.log(err)
      res.status(500).json({
        errors: err
      })
    })
  }
}