var express = require('express');
var passport = require('passport');
var Account = require('../models/Account');
var controller = express.Router();
var LocalStrategy = require('passport-local').Strategy;

controller.get('/', function(req, res) {
  res.render('account', { user: req.user });
});

controller.get('/register', function(req, res) {
  res.render('register', {});
});

controller.post('/register', function(req, res) {
  Account.register(new Account({
    username: req.body.username
  }),
  req.body.password, function(error, account) {
    if(error) {
      return res.render('register', { account: account });
    }
    passport.authenticate('local')(req, res, function() {
      res.redirect('/');
    });
  });
});
controller.get('/login', function(req, res){
  res.render('login', { user: req.user });
});
///////////////////////////// T O     L O G     I N ///////////////////////////
controller.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

controller.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

controller.get('/logout', function() {
  req.logout();
  res.redirect('/');
});

controller.get('/protectedresource', function(req,res) {
  res.status(200).send("the secret to ever success is to never stop");
});

module.exports = controller;
