//import the express library
const express = require('express');
// cors is a middleware to parse json in the request body
const cors = require('cors');
//initialise the app
const app = express();
// choose a port
const port = process.env.PORT || 3000;
app.use(cors());
// For hosting purposes, I will be using som emock data. However, we can also connect a database with motivational quotes to our server using the code below.
//connect mysql to node
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'localhost', // your MySQL host (usually 'localhost')
//     user: 'root',
//     password: 'mypassword',
//     database: 'motivational_quotes',
//     insecureAuth: true
// });

// // Connect to the database
// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });

// module.exports = connection;


// Mock data 
const motivationalQuotes = [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Believe you can and you\'re halfway there. - Theodore Roosevelt',
    'Don\'t watch the clock; do what it does. Keep going. - Sam Levenson',
    'Success is not in what you have, but who you are. - Bo Bennett',
    'Don\'t be afraid to give up the good to go for the great. - John D. Rockefeller',
    'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    'The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh',
    'Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett',
    'Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar',
    'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
    'It\'s not whether you get knocked down, it\'s whether you get up. - Vince Lombardi',
    'The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson',
    'What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar',
    'Your time is limited, don\'t waste it living someone else\'s life. - Steve Jobs',
    'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson',
    'Act as if what you do makes a difference. It does. - William James',
    'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer',
    'The only thing standing between you and your goal is the story you keep telling yourself as to why you can\'t achieve it. - Jordan Belfort',
    'Success is not in what you have, but who you are. - Bo Bennett',
    'Don\'t be afraid to give up the good to go for the great. - John D. Rockefeller',
    'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    'The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh',
    'Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett',
    'Don\'t watch the clock; do what it does. Keep going. - Sam Levenson',
    'Act as if what you do makes a difference. It does. - William James',
    'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer',
    'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
    'It\'s not whether you get knocked down, it\'s whether you get up. - Vince Lombardi',
    'The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson',
    'Your attitude, not your aptitude, will determine your altitude. - Zig Ziglar',
    'I find that the harder I work, the more luck I seem to have. - Thomas Jefferson',
    'What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar',
    'Your time is limited, don\'t waste it living someone else\'s life. - Steve Jobs',
    'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson',
    'Act as if what you do makes a difference. It does. - William James',
    'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer',
];
// Define a route for handling GET requests to the '/quote' endpoint
app.get('/quote', (req, res) => {
    // Randomly select a quote from the array
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

    // Send the selected quote as JSON in the response
    res.json({ quote: randomQuote });
});


// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
