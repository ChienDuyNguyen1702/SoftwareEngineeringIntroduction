const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema);;


// // Connect to MongoDB
// mongoose.connect('mongodb://username:password@localhost:27017/database', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     // Authentication succeeded, execute the find command or other queries here
//     // For example:
//     const MyModel = mongoose.model('MyModel', new mongoose.Schema({ name: String }));
//     MyModel.find({}, (error, documents) => {
//       if (error) {
//         console.error(error);
//       } else {
//         console.log(documents);
//       }
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });