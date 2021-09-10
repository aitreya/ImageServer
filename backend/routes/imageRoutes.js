const path = require('path')
const ROOTPATH = path.join(__dirname, '../')
const express = require('express')
const ImageController = require(path.join(ROOTPATH, '/controllers/ImageController'))
const routes = express()

routes.get('/test' , ImageController.Test)

module.exports = routes