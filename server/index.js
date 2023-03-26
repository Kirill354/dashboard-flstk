const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./db');

const PORT = process.env.PORT || 4444;

// db connection
(async () => {
   try {
      await sequelize.authenticate();
      console.log('DB OK');
   } catch (error) {
      console.error('DB ERROR:', error);
   }
})();

const app = express();
app.use(express.json());
app.use(cors());

// user routes
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/posts', require('./routes/post.routes'));

app.listen(PORT, (err) => {
   if (err) {
      return console.log(err);
   }
   console.log('Server OK');
});
