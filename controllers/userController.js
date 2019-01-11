const User = require('../models/user')
const helper = require('../helpers/helper')

module.exports = {
  register: (req, res) => {
    User.create({
      email: req.body.email,
      password: req.body.password,
      avatar: 'https://www.w3schools.com/w3images/avatar2.png'
    })
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json({
        errors: err
      })
    })
  },
  login: (req, res) => {
    User.findOne({
      email: req.body.email
    })
    .then(user => {
      if(!user) {
        res.status(400).json({
          message: 'wrong email/password'
        })
      } else {
        let check = helper.compare(req.body.password, user.password)
        if(!check) {
          res.status(400).json({
            message: 'wrong email/password'
          })
        } else {
          res.status(200).json({
            token: helper.token(user.email)
          })
        }
      }
    })
    .catch(err => {
      res.status(500).json({
        errors: err
      })
    })
  },
  google: (req, res) => {
    User.findOne({
      email: req.decoded.email
    })
    .then(user => {
      if(user) {
        return user
      } else {
        return User.create({
          email: req.decoded.email,
          password: process.env.PASSWORD,
          method: 'google',
          avatar: req.decoded.picture
        })
      }
    })
    .then(user => {
      res.status(200).json({
        token: helper.token(user.email)
      })
    })
    .catch(err => {
      res.status(500).json({
        errors: err
      })
    })
  }
}