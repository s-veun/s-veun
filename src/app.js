import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from '../config/db.js';
import Post from './models/postModel.js'
import postRoutes from "./routes/postRoute.js"


// Connect to MongoDB
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', postRoutes)



 app.get('/', (req, res) => {
  res.send('Hello World!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

