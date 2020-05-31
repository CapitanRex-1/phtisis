const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const postRouter = require('./routes/post')
const keys = require('./keys')
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./db');
var flash = require('connect-flash');
const app = express()
const port = process.env.PORT || 5000
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected.'))
    .catch(err => console.error(err))

passport.use(new Strategy(
    function(username, password, cb) {
        db.users.findByUsername(username, function(err, user) {
        if (err) { return cb(err, { message:'Ошибка'}); }
        if (!user) { return cb(null, false, { message:"Введен не верный логин"}); }
        if (user.password != password) { return cb(null, false, { message:'Введен не верный пароль'}); }
        return cb(null, user);
        });
    }));

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
    });
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/api/post', postRouter)
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(express.static(__dirname + '/'))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  });

app.get('/login',
  function(req, res){
    var check = req.flash('error')+'';   
    res.render('login', {answer: check});    
  });
  
app.post('/login', 
  passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login', failureFlash: true}));
  
app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

app.get('/database',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('database', { user: req.user });
  });

app.get('/sub-static',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
    res.render('sub-static', { user: req.user });
});

app.get('/statistics',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
    res.render('statistics', { user: req.user });
});

app.get('/analytics',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
    res.render('analytics', { user: req.user });
});

app.get('/archive',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
    res.render('archive', { user: req.user });
});
  
app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
})

