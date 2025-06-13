import express from 'express';
import upload from '../config/cloudinary.js'; // Make sure `upload.js` uses ES export
import addFoodItem from "../Controllers/foodController.js"

const FoodRouter = express.Router();

FoodRouter.post('/add-food', upload.single('image'), addFoodItem);

export default FoodRouter;
