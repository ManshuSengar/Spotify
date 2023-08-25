import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { SongRouter } from './Routes/SongRouter.js';

dotenv.config()
const app = express();

app.use(express.json())

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log("Hello world");
    mongoose.connect(process.env.DB_URL)
        .then(() => console.log("connected to db"), err => console.log(err))
});

app.use('/api/song/', SongRouter)


app.get('/', (req, res) => {
    res.send("hello world")
})