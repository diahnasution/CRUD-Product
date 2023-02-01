const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');
const router = require('./routes');
app.use(router);
app.listen(process.env.PORT || 3000, () => console.log('Server Runnung on port ', process.env.PORT ));

