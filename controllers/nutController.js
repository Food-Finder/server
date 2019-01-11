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
    console.log(process.env.F2FAPPKEY);
    const url = `https://www.food2fork.com/api/search?key=${process.env.F2FAPPKEY}&q=${foodName}&sort=r`
    axios({
      method:'GET',
      url
    })
    .then(({data: {recipes}}) => {
      let top10= recipes.slice(0,10);
      res.status(200).json({
        message:'success',
        top10
      })
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({
        message: err
      })
    })
  }
}