import express from 'express';
import Hobby from '../models/Hobby.js';

const hobbyRoutes = express.Router();

// Get All Hobbies
hobbyRoutes.get('/all', async (req, res) => {
    try {
        const hobbies = await Hobby.find();
        res.status(200).json({ status: 'success', data: hobbies });
    } catch (error) {
        console.error('Error Fetching hobbies');
        res.status(500).json({ message: 'Server error while fetching hobbies' });
    }
});

// Create a new Hobby
hobbyRoutes.post('/create', async (req, res) => {
    const { name, description, category, frequency } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    try {
        const newHobby = new Hobby({ name, description, category, frequency });
        const savedHobby = await newHobby.save();
        res.status(201).json({ status: 'success', data: savedHobby });
    } catch (error) {
        console.error('Error creating hobby:', error);
        res.status(500).json({ message: 'Server error while creating hobby' });
    }
});

export default hobbyRoutes;