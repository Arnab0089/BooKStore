import express from 'express';
import {PORT,MONGO_URL} from './Config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import bookRouter from './routes/booksRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json()); // Parse JSON bodies

// Middleware handling CORS policy
// allowing all origins with default of cors(*)

app.use(cors());

// option 2: allow only specific origins


app.get('/', (req, res) => {
    console.log('Request received : ',req.url);
    res.status(200).send('Welcome to the Mern Stack World!'); // Send response he
});


app.use('/books', bookRouter);

mongoose.connect(MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error)=>{
    console.log('Error : ',error);
}); // Connect to MongoDB