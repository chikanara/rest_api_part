const express = require("express");
const router = express.Router();
const { getContacts, addContact, deleteContact, updateContact } = require("../controllers/contactController");

router.get("/contacts", getContacts);
router.post("/add_contact", addContact);
router.delete('/contacts/:id',deleteContact)
router.put('/contacts/:id',updateContact)

module.exports = router;
