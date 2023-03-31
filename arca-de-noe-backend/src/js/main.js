import express from 'express';
import cors from 'cors'; // Just use in development. In production, set policies correctly!

import userRouter from './routes/userRouter.js';
import dogRouter from './routes/dogRouter.js';
import mongoose from "mongoose";
import Dog from './DogInfo.js';

const app = express();

const port = 5000;

app.use(cors()); // Just use in development. In production, set policies correctly!
app.use(express.json());
app.use('/user', userRouter);
app.use('/dog', dogRouter);

app.listen(port, () => { console.log('Listening on port ' + port); });

app.get("/dogs", async (req, res) => {
    try {
        const dogs = await Dog.find();

        res.status(200).json(dogs);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

mongoose.set("strictQuery", true);

mongoose
    .connect(
        "mongodb+srv://enio:<password>@cluster0.bmoldca.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Connected with mongoDB!");
        app.listen(4000, () => {
            console.log("Server is running...");
        });
    })
    .catch((err) => console.log(err));
