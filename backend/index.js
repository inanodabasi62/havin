const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/havin', {
  user: "inan",
  pass: "Munire1977*",
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use('/users', require('./routes/user'));
app.use('/products', require('./routes/marketplace'));
app.use('/feedback', require('./routes/feedback'));

app.get('/', (req, res) => res.send('Havin API'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
