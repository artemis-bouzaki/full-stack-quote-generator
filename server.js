//import the express library
const express = require('express');
// cors is a middleware to parse json in the request body
const cors = require('cors');
//initialise the app
const app = express();
// choose a port
const port = process.env.PORT || 3000;
app.use(cors());

//connect mysql to node
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost', // your MySQL host (usually 'localhost')
    user: 'root',
    password: 'Gouvernetou11',
    database: 'motivational_quotes',
    insecureAuth: true
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection;

// Define a route for handling GET requests to the '/quote' endpoint
app.get('/quote', (req, res) => {
    // Randomly select a quote from the array
    const selectQuery = 'SELECT quote FROM quotes ORDER BY RAND() LIMIT 1';

    connection.query(selectQuery, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        // Check if any quotes were found
        if (results.length === 0) {
            return res.status(404).json({ error: 'No quotes found' });
        }

        // Send the fetched quote as JSON in the response
        res.json({ quote: results[0].quote });
    });
});

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Express is useful for handling HTTP requests. There are different types of requests.

// 1) get requests: Their purpose is to retrieve data from the server
// app.get('/', (req, res) => {
//     res.send("Hello express");
// });
// (the difference between res.send and res.json is that res.send(data) sends a generic response with various types of data)

//2) post requests: Their purpose is to send data to the server to create a new resource. It contains a request body, which is usually the data to be sent to the server, usually in JSON format. Can be used to create a new user account
// app.post('/users', (req, res) => {
//     // Create a new user using data in req.body
//      const userData = req.body; // access the request body
//     res.send('User created successfully');
// });

//3) Put request: Their purpose is to update data on the server. It contains a request body in JSON format
// app.put('/users/:id', (req, res) => {
//     userInfo = req.body;
//     res.send('User info updated succesfuly');
// });

//4) Delete: Delete a resource on the server. It usually doesnt have a request body.
// app.delete('/users/:id', (req, res) => {
//     res.send('User deleted succesfully.')
// })