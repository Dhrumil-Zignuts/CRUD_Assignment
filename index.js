const express = require('express');

// Create a Server
const app = express();

// Middleware 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// use Static Files
app.use(express.static('./public'));

// Set a view JS
app.set('view engine', 'ejs');

// routes
const routes = require('./Routes/courseRouter');
app.use('/api/courses',routes);

// Port
const port = process.env.PORT || 3000

// Listen the Server
app.listen(port, ()=>{
    console.log(`Server is running on Port no :- ${port}`); 
})