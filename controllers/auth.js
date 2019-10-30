const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req
  //   .get('Cookie')
  //   .split(';')[0]
  //   .trim()
  //   .split('=')[1]
  res.render('auth/login', {
    pageTitle: 'Login',
    path: '/login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('5daf0de6c16ea33330ba2550')
    .then(user => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.redirect('/');
    })
};
