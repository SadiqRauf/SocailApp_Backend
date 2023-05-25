const asyncHandler = require("express-async-handler")
const Contact = require('../modals/contactModal')
// @desc get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts.reverse())
})
// @desc create new contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("All fields are mendatory")
    }
    const contacts = await Contact.create({
        name,
        email,
        phone
    })
    res.status(201).json(contacts)
})

// @desc get a single contact by id
// @route GET /api/contacts/id
// @access public
const getContactByID = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id)
    if (!contacts) {
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contacts)
})

// @desc update a contact by id
// @route PUT /api/contacts/id
// @access public
const updateContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id)
    if (!contacts) {
        res.status(404)
        throw new Error("Contact not found")
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updateContact)
})

// @desc delete a contact by id
// @route DELETE /api/contacts/id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.findById(req.params.id)
    if (!contacts) {
        res.status(404)
        throw new Error("Contact not found")
    }
    await Contact.findByIdAndRemove(req.params.id)
    res.status(200).json(contacts)
})

module.exports = { getContacts, createContact, getContactByID, updateContact, deleteContact }