const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app =express();

//config
app.set('port', 3000);
app.set('json spaces', 2)

//middle
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json({type: "*/*"}));
app.use(cors());

//route
app.use(require('./routes/index'));
app.use(require('./routes/products'));
app.use(require('./routes/login'));

//Iniciar server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
