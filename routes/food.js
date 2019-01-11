const express = require('express');
const router = express.Router()

const FoodController = require('../controllers/foodController')

router.get('/categories', FoodController.getCategories)
router.get('/collections', FoodController.getCollections)
router.get('/cuisines', FoodController.getCuisines)
router.get('/establishments', FoodController.getEstablishments)
router.get('/search', FoodController.getRestaurants)

module.exports = router
