const Contact = require("../models/Contact");

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(201).json(contacts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const addContact = async (req, res) => {
  const { name, lastName, email, phone } = req.body;
  try {
    const newContact = new Contact({ name, lastName, email, phone });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteContact = async (req, res) => {
  const contactID = req.params.id;
  try {
    const contactRemoved = await Contact.findByIdAndDelete(contactID);
    res.status(201).json(contactRemoved);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateContact = async (req, res) => {
  const contactID = req.params.id;
  try {
    const contactUpdated = await Contact.findByIdAndUpdate(
      contactID,
      { ...req.body },
      { new: true }
    );
    res.status(201).json(contactUpdated);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getContacts, addContact, deleteContact, updateContact };
