
const express = require('express');

const connectDB = require('./config/Database_config');
// const connectDB = require('./db');
const path = require('path')
const cors = require('cors');
const multer = require('multer');
const User = require('./models/Users');
require('dotenv').config();
const { user_route ,auth_route} = require('./routers');

const app = express();
app.use(express.json());
app.use(cors({
  origin:['http://localhost:3000/'],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}
));
const port=process.env.PORT;


connectDB();


app.use("/api/v1/auth",auth_route )
app.use("/api/v1/users", user_route)













// app.use('/uploads/images', express.static(path.join(__dirname, 'uploads')));
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/")
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now()
//     cb(null, uniqueSuffix + file.originalname)
//   }
// })

// const upload = multer({ storage: storage })


// // POST route for registering a new user with image upload
// app.post('/register', upload.single('image'), async (req, res) => {

//   const { name, email, username, number } = req.body;
//   const imageName = req.file.filename;

//   // if (!name || !email || !username || !number || !image) {
//   //   return res.status(400).json({ message: 'All fields, including an image, are required.' });
//   // }

//   try {
//     const newUser = new User({
//       name: name,
//       email: email,
//       username: username,
//       number: number,
//       image: imageName // Save the path of the uploaded image
//     });
//     User.create(newUser);
//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully.' });
//   } catch (error) {
//     res.json({ status: error })
//     res.status(500).json({ message: 'An error occurred while registering the user.' });
//   }
// });

// app.put('/update/:id', upload.single('image'), async (req, res) => {
//   const userId = req.params.id; // Get the user ID from the request parameters
//   const { name, email, username, number } = req.body;
//   const imageName = req.file ? req.file.filename : null; // Check if a new image file was uploaded

//   try {
//     // Find the user by ID and update the provided fields
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found.' });
//     }

//     // Update fields only if they are provided in the request
//     if (name) user.name = name;
//     if (email) user.email = email;
//     if (username) user.username = username;
//     if (number) user.number = number;
//     if (imageName) user.image = imageName; // Update image if a new one was uploaded

//     await user.save(); // Save the updated user data
//     res.status(200).json({ message: 'User updated successfully.' });
//   } catch (error) {
//     res.status(500).json({ message: 'An error occurred while updating the user.', error });
//   }
// });


// // PUT route to update user information without image upload
// // app.put('/user/:id', async (req, res) => {
// //   const { id } = req.params;
// //   const { name, email, username, number } = req.body;

// //   // Check if all required fields are provided
// //   if (!name || !email || !username || !number) {
// //     return res.status(400).json({ error: 'All fields are required' });
// //   }

// //   try {
// //     const updateData = { name, email, username, number };
// //     const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

// //     if (!updatedUser) {
// //       return res.status(404).json({ error: 'User not found' });
// //     }

// //     res.json({ message: 'User updated successfully', user: updatedUser });
// //   } catch (error) {
// //     console.error(error.message);
// //     res.status(500).json({ error: error.message });
// //   }
// // });

// // DELETE route to delete a user
// app.delete('/user/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedUser = await User.findByIdAndDelete(id);

//     if (!deletedUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     res.json({ message: 'User deleted successfully', user: deletedUser });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// // GET route to fetch all registered users
// app.get('/registereduser', async (req, res) => {
//   try {
//     const usersData = await User.find({});
//     res.json({ usersData });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// // 404 handler should be last
// app.use((req, res) => {
//   console.error(`404 - Not Found: ${req.method} ${req.url}`);
//   res.status(404).send('404 Not Found');
// });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
