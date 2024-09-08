const express = require('express');
const connectDB = require('./db');
const path = require('path')
const cors = require('cors');
const multer = require('multer');
const Jwt = require('jsonwebtoken');
const User = require('./Users');

const JwtKey = 'regiUser';
const app = express();
app.use(express.json());
app.use(cors());


connectDB();


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post('/register', upload.single('image'), async (req, res) => {
  const { name, email, username, number } = req.body;
  const imageName = req.file ? req.file.filename : null;
  const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${imageName}`;
  console.log(req.body)



  if (!name || !email || !username || !number || !imageName) {
    return res.status(400).json({ message: 'All fields, including an image, are required.' });
  }

  try {
    const newUser = new User({
      name,
      email,
      username,
      number,
      image: imageUrl
    });

    const user = await newUser.save();
    if (user) {
      // Only sign JWT after successfully saving the user
      Jwt.sign({ user }, JwtKey, { expiresIn: '1h' }, (err, token) => {
        if (err) {
          console.error('Error signing JWT:', err);
          return res.status(500).json({ message: 'An error occurred while signing the token.', error: err });
        }

        console.log('Token generated:', token);  // Debugging: Check if token is generated
        // Send response with token and user data
        res.status(201).json({ message: 'User registered successfully.', user, auth: token });
      });
    }
  } catch (error) {
    console.error('Error saving user to database:', error);
    res.status(500).json({ message: 'An error occurred while registering the user.', error });
  }
});


app.put('/update/:id', upload.single('image'), async (req, res) => {
  const userId = req.params.id; // Get the user ID from the request parameters
  const { name, email, username, number } = req.body;
  const imageName = req.file ? req.file.filename : null; // Check if a new image file was uploaded
  const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${imageName}`;


  try {
    // Find the user by ID and update the provided fields
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Update fields only if they are provided in the request
    if (name) user.name = name;
    if (email) user.email = email;
    if (username) user.username = username;
    if (number) user.number = number;
    if (imageName) user.image = imageUrl; // Update image if a new one was uploaded

    await user.save(); // Save the updated user data
    res.status(200).json({ message: 'User updated successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while updating the user.', error });
  }
});


// PUT route to update user information without image upload
// app.put('/user/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, email, username, number } = req.body;

//   // Check if all required fields are provided
//   if (!name || !email || !username || !number) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }

//   try {
//     const updateData = { name, email, username, number };
//     const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

//     if (!updatedUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     res.json({ message: 'User updated successfully', user: updatedUser });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// DELETE route to delete a user
app.delete('/user/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully', user: deletedUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

// GET route to fetch all registered users
app.get('/registereduser', async (req, res) => {
  try {
    const usersData = await User.find({});
    res.json({ usersData });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

// 404 handler should be last
app.use((req, res) => {
  console.error(`404 - Not Found: ${req.method} ${req.url}`);
  res.status(404).send('404 Not Found');
});

const PORT = process.env.PORT || 4700; // Default to port 3000 if not specified

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

