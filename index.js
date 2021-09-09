const express = require("express");
const envirnment = require('dotenv').config();
const path = require('path');
const test = require("./controllers/HomeController");


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')))

app.get("/",test.Index);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});