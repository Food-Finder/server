require('dotenv').config()
const axios = require('axios');

axios.defaults.baseURL = 'https://developers.zomato.com/api/v2.1/';
axios.defaults.headers.common['user-key'] = process.env.ZOMATO_KEY;
axios.defaults.headers.post['Accept'] = 'application/json';

class FoodController {
  static async getCategories(req, res) {
    try {
      let response = await axios.get('/categories')
      res.status(200).json(response.data)
    } catch (error) {
      res.status(500).json(error)
    }
 }

 static async getCollections(req, res) {
    try {
      let response = await axios.get('/collections?city_id=74')
      res.status(200).json(response.data)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static async getCuisines(req, res) {
    try {
      let response = await axios.get('/cuisines?city_id=74')
      res.status(200).json(response.data)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  static async getEstablishments(req, res) {
    try {
      let response = await axios.get('/establishments?city_id=74')
      res.status(200).json(response.data)
    } catch (error) {
      res.status(500).json(error)
    }
  }
  
  static async getRestaurants(req, res) {
    let query = ''
    for (const key in req.query) {
      query += `&${key}=${req.query[key]}`
    }
    try {
      let response = await axios.get(`/search?entity_id=74&entity_type=city${query}`)
      res.status(200).json(response.data)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = FoodController
