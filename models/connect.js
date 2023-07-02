const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://admin:VRuAd2Nvmp4ELHh5@localhost:27017/?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true ,
useFindAndModify: true,
useCreateIndex: true})
  .then(() => {
    // Authentication succeeded, execute the find command or other queries here
    // For example:
    const User = mongoose.model('User', mongoose.Schema({ 
        username: {
        type: String,
        unique: true,
        required: true
      },
      password: {
        type: String,
        required: true
      }}));
    User.find( (error, documents) => {
      if (error) {
        console.error(error);
      } else {
        console.log(documents);
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });