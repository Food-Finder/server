const mongoose = require('mongoose')
const helper = require('../helpers/helper')
const Schema = mongoose.Schema

const userSchema = new Schema ({
  email: {
    type: String,
    required: [true, 'email field cant empty'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    validate: {
      validator: function (value) {
        return User.findOne({
          email: value
        })
        .then(user => {
          if(user) return false
        })
        .catch(err => {
          throw new Error(err)
        })
      }
    }
  },
  password: {
    type: String,
    required: [true, 'password field cant empty'],
  },
  avatar: {
    type: String,
    required: [true, 'avatar field cant empty']
  },
  method: {
    type: String,
    default: 'register'
  }
})

userSchema.pre('save', function (next) {
  this.password = helper.hash(this.password)
  next()
})

const User = mongoose.model('User', userSchema)
module.exports = User