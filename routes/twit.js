var Twit = require('../models/tweet');
var User = require('../models/user');


//Create a twit!
exports.create = function(req, res){
  var user_req = req.body.uid;
  var new_twit = new Twit({ user:user_req, text: req.body.text });
  //
  new_twit.save(function (err) {
    if (err) return console.log("error", err);
    res.redirect('/');
  });
};

//List ALL of the twits!
exports.list = function(req, res){
  Twit.find({}).populate('user').sort("-_id").exec(function (err, docs) {
    if (err) return console.log('error', err);
    res.render('_twits', {tweets: docs, title: 'List of Tweets'});
  });
};


//Deleting twits?
exports.delete_all = function(req, res){
  Twit.remove({}, function(err) { 
    console.log('collection removed') 
  });
  res.send("deleted");
};
