const axios = require('axios');

module.exports = class Nut {
  static getNutrition (req,res) {
    let food = req.body;
    axios.post
    const url = "https://trackapi.nutritionix.com/v2/natural/nutrients";
    axios({
      method: 'POST',
      url,
      data: food,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-app-id' : process.env.NUTRITIONIXAPPID,
        'x-app-key': process.env.NUTRITIONIXAPPKEY,
        'x-remote-user-id' : 0
      },
    })
    .then(function(res) {
      console.log(res)
    })
    .catch(err=> console.log('err'))
  }
  static getRecipe (req,res) {
    const foodName = req.query.q.trim().replace(' ','%20');
    const url = `https://www.food2fork.com/api/search?key=${process.env.F2FAPPKEY}&q=${foodName}&sort=r`
    var request = require('request');
    
    var options = {
      headers: {
        'User-Agent': 'request'
      },
      url,
      method: "GET"
    };
    
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        let top10 = JSON.parse(response.body).recipes.slice(0,9);
        res.status(200).json({
          top10
        })
      } else {
        res.status(400).json({
          message: error
        })
      }
    }
    request(options, callback);
  }
}