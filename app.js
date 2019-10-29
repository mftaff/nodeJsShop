const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5daf0de6c16ea33330ba2550')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://meir:qQY2ByJrwvU4hLLm@cluster0-zc7pz.mongodb.net/shop?retryWrites=true&w=majority'
  ).then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Meyer',
          email: 'meyertaffelwebsolutions@gmail.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  }).catch(err => {
    console.log(err)
  });
