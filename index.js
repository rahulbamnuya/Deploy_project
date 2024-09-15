// Import Express module
const express = require('express');
const app = express();

// Define the port for the server to listen on
const port = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! This is a simple Node.js app.');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
