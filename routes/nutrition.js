const nutController = require('../controllers/nutController');
const express = require('express');
const router = express.Router();

router.post('/', nutController.getNutrition);
router.get('/', nutController.getRecipe);

module.exports = router