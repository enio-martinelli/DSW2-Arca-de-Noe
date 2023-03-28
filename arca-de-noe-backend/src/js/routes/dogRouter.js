import express from 'express';
import { createDog, updateDog, retrieveDogById, retrieveDogByBreed } from '../persistence/dogPersistence.js';

const router = express.Router();

// Save or update a dog.
// If an id is provided, dog is updated (id will not be updated).
// If no id is provided, dog is created (new id will be generated).
router.put('/', async (req, res) => {
    try {
        if (req.body.id) {
            const updatedDog = await updateDog(req.body);
            return res.json(updatedDog);
        } else {
            const newDog = await createDog(req.body);
            return res.json(newDog);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error creating dog');
    }
});

// Retrieve a dog by id (provided via query param)
router.get('/', async (req, res) => {
    try {
        if (req.query.id) {
            const dog = await retrieveDogById(req.query.id);
            return res.json(dog);
        } else {
            res.status(404).send('Dog does not exist');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving dog');
    }
});

// Retrieve a dog by breed (provided via query param)
router.get('/', async (req, res) => {
    try {
        if (req.query.bredd) {
            const dog = await retrieveDogByBreed(req.query.breed);
            return res.json(dog);
        } else {
            res.status(404).send('Breed does not exist');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving dogs');
    }
});


export default router;