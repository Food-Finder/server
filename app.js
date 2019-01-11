require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
<<<<<<< HEAD
const cors = require('cors')

=======
var cors = require('cors');
>>>>>>> recipe endpoint finish
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/food-finder');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database mongoose')
});

var userRouter = require('./routes/user');
const foodRouter = require('./routes/food')
var nutRouter = require('./routes/nutrition');
var app = express();
<<<<<<< HEAD

app.use(cors())
=======
app.use(cors());
>>>>>>> recipe endpoint finish
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRouter);
app.use('/food', foodRouter)
app.use('/nutrition', nutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err)
  // render the error page
  res.status(err.status || 500);
  res.json('error');
});
module.exports = app;
