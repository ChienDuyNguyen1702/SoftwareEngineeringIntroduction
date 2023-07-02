const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb+srv://chiennd172002:172002cC@@cluster0.0vfe8lp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true ,
useFindAndModify: true,
useCreateIndex: true})
  .then(() => {
    // Authentication succeeded, execute the find command or other queries here
    // For example:
    const User = mongoose.model('users', mongoose.Schema({ 
        username: {
        type: String,
        unique: true,
        required: true
      },
      password: {
        type: String,
        required: true
      }}));
    User.find({});
  })
  .catch((error) => {
    console.error(error);
  });