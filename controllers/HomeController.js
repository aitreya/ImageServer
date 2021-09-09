const path = require('path');
const viewPath = path.join(__dirname, '../views/')

const Index = (req, res, next) => {
    res.render('index');
};

module.exports = {Index};