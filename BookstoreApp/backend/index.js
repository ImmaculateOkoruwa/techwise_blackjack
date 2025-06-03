import express from 'express';
import { PORT, mongoDBURL } from './config.js';    
import mongoose from'mongoose';
import { Book } from './models/bookModels.js';  
import bookRoute from './routes/bookRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

//Middleware for CORS (Cross-Origin Resource Sharing)
// Option 1: Allow all origins with Default of cors(*)
app.use(cors());

//Option 2: Allow custom origins
//app.use(cors({
//    origin: 'http://localhost:3000',
//  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
//    allowedHeaders: ['Content-Type']

//}));


app.get('/', (req, res) => {
    res.send('Welcome to the TechWise Bookstore API');
});

app.use('/books', bookRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error connecting to database:', error.message);
    });
      