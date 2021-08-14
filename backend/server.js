const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const contactRouter = require("./routes/contactRouter");

//middleware
app.use(express.json());
app.use("/api", contactRouter);

//4 create the schema
const Contact = require("./models/Contact");

//3 set up the env variables
require("dotenv").config({ path: "./config/.env" });

//2 connect the database
connectDB();

/*******************************create the CRUD *********************************/
//1 POST A NEW CONTACT
// app.post("/api/add_contact", async (req, res) => {
// console.log(req.body)
// res.send('hello')
//   const { name, lastName, email, phone } = req.body;
//   try {
//     const newContact = new Contact({ name, lastName, email, phone });
//     await newContact.save();
//     res.send(newContact);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ msg: error.message });
//   }
// });

// app.get("/api/contacts", async (req, res) => {
//   try {
//     const contacts = await Contact.find();
//     res.send(contacts);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

// app.get("/api/contacts/:id", async (req, res) => {
//   const contactID = req.params.id;
//   try {
//     const contact = await Contact.findById(contactID);
//     res.send(contact);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

// app.delete("/api/contacts/:id", async (req, res) => {
//   const contactID = req.params.id;
//   try {
//     const contactRemoved = await Contact.findByIdAndDelete(contactID);
//     res.send(contactRemoved);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

// app.put("/api/contacts/:id", async (req, res) => {
//   const contactID = req.params.id;
//   try {
//     const contactUpdated = await Contact.findByIdAndUpdate(
//       contactID,
//       { ...req.body },
//       { new: true }
//     );
//     res.status(201).json(contactUpdated);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });

//1 CREATE THE SERVER
const PORT = 5000;
app.listen(PORT, (err) =>
  err
    ? console.error(error)
    : console.log(`the server is running on port ${PORT}`)
);
