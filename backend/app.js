const express = require("express");
const envirnment = require('dotenv').config();
const path = require('path');
const pageRoutes = require(path.join(__dirname, '/routes/pages'))
const imageRoutes = require(path.join(__dirname, '/routes/imageRoutes'))
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'Images')))

app.use(pageRoutes)
app.use("/Images" , imageRoutes)

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});