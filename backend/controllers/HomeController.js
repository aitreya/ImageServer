const path = require('path');

const Index = (req, res, next) => {
    res.send("Hi you hit the index")
};

module.exports = {Index};