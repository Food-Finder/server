const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  hash: (password) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    return hash
  },
  compare: (input, password) => {
    return bcrypt.compareSync(input, password)
  },
  token: (email) => {
    let token = jwt.sign({
      email: email
    }, process.env.SECRET)
    return token
  }
}