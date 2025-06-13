import path from 'path';
import fs from 'fs'
import cloudinary from '../config/cloudinary.js'
import foodmodel from '../Models/FoodModel1.js'

const addFoodItem = async (req, res) => {
  try {
    const localPath = path.join(__dirname, '..', 'uploads', req.file.filename);

    const result = await cloudinary.uploader.upload(localPath, {
      folder: 'foodImages'
    });

    // Delete local file after upload
    fs.unlinkSync(localPath);

    const newFood = new foodmodel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: result.secure_url
    });

    await newFood.save();
    res.status(201).json({ message: 'Food item created', food: newFood });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to upload and save food item' });
  }
};

export default addFoodItem
