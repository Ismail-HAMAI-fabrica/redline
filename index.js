import express from 'express';
import swaggerUi from 'swagger-ui-express';
import docs from './swagger.js'; // import the docs object from swagger.js
import cors from 'cors';
import corsOptions from './config/corsOptions.js';



// Import express
const app = express();
app.use(cors(corsOptions)); 

// Import body-parser middleware
import bodyParser from 'body-parser';
 
// Parse incoming data as JSON or URL-encoded data
app.use(bodyParser.json()); // JSON
app.use(bodyParser.urlencoded({ extended: false })); // URL-encoded

// Import Mongoose
import mongoose from 'mongoose'; 

// Get routes from route file routes.js
import routes from './routes/routes.js';

// Load environment variables from a .env file
import dotenv from 'dotenv';
dotenv.config();



// Get the database URL from .env file
const mongoString = process.env.DATABASE_URL;

// Connect the database to our server using Mongoose
mongoose.connect(mongoString);
const database = mongoose.connection;

// Check if the connection is successful or fails
database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));

// Set up routes
app.use('/api', routes); // all routes start with /api

// Handle wrong endpoints
app.use('/*', (req, res) => {
  res.status(404).json('This is a wrong endpoint!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running at port 3000');
});
