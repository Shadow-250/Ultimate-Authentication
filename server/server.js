const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// connect to db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB CONNECTION ERROR: ', err));

// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors()); // allows all origins

// make whiteList for trust but it seemly difficult to settings or something else
// this will debug by other way after
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var whitelist = ['http://192.168.1.177:3000/'];

// if ((process.env.NODE_ENV = 'development')) {
//     app.use(cors({ origin: function (origin, callback) {
//             if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//             } else {
//             callback(new Error('Not allowed by CORS'))
//             }
//         }}
//     ));
// }

// middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
