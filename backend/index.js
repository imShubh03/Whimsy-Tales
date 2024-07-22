import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

const app = express();

//middlewares
//cors middleware
app.use(cors());
app.use(express.json())


dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Check if environment variables are loaded
if (!URI) {
    console.error("MongoDBURI is not defined. Please check your .env file.");
    process.exit(1);
}

// Print URI to verify it's correctly loaded
console.log("MongoDB URI:", URI);

// Connect to MongoDB
mongoose.connect(URI)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
});

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
