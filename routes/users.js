let mongoose = require('mongoose');

let url = "mongodb://127.0.0.1:27017/gamingForum";

mongoose.connect(url, {useUnifiedTopology:true, useNewUrlParser:true})
  .then(function() {
    console.log('Database Connected')
  })
  .catch(function(e) {
    console.log(e)
  })

let UserSchema = mongoose.Schema({
  gamename: String,
  review: String
})

module.exports = mongoose.model('user', UserSchema)