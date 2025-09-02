const express = require('express');
const multer = require('multer');
const upload = multer();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', upload.single('profilePic'), (req, res) => {
  console.log('Form Data:', req.body);
  if (req.file) console.log('File:', req.file.originalname);
  res.send('Thanks for registering!');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
