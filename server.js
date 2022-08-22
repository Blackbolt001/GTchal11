const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

// Sets port for listening and let heroku decide on port, if not, use port 3005
const PORT = process.env.PORT || 3001;


const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//serve images, CSS files, and JavaScript files in a directory named public
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.use('/api',apiRoutes);
app.use('/',htmlRoutes);




app.listen(PORT, () => {
    console.log("Server listening on port " + 'PORT || 3001');
});