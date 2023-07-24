import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/db-connect.js';
import bookRouter from './routes/book-routes.js';

const app = express();

app.use(express.json(), cors());
app.use('/api/books', bookRouter);

dotenv.config();
const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);