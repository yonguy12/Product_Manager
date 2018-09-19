const path = require('path');

const api = require("./controller.js")

const bp = require("body-parser");

module.exports = function(app){

    app.use(bp.json());

    app.get('/api/products', api.allProducts);
    app.post('/api/products', api.makeProduct);
    app.get('/api/products/:_id', api.getProduct);
    app.patch('/api/products/:_id', api.updateProduct);
    app.delete('/api/products/:_id', api.deleteProduct);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
    return app;

}
