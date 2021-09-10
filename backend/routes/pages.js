const path = require('path')
const ROOTPATH = path.join(__dirname, '../')
const express = require('express')
const HomeController = require(path.join(ROOTPATH, '/controllers/HomeController'))
const routes = express()

routes.get('/' , HomeController.Index)

module.exports = routes