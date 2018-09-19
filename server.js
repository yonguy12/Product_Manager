const xp = require('express');
const bp = require('body-parser');
const router = require('./server/routes.js');

const app = xp();
app.use(xp.static( __dirname + '/public/dist/public' ));
app.use(bp.urlencoded({extended:true}));

router(app);

app.listen(8000, (errs)=>console.log(errs?errs:'gucci'));