// @desc get all contacts
// @route GET /api/contacts
// @access public
const getContacts = (req, res)=>{
    res.status(200).json({message:'Get All Contacts'})
}

// @desc create new contact
// @route POST /api/contacts
// @access public
const createContact = (req, res)=>{
    console.log(req.body)
    res.status(200).json({message:'Created new contact'})
}

// @desc get a single contact by id
// @route GET /api/contacts/id
// @access public
const getContactByID = (req, res)=>{
    res.status(200).json({message:`Get a single contact by id: ${req.params.id}`})
}

// @desc update a contact by id
// @route PUT /api/contacts/id
// @access public
const updateContact = (req, res)=>{
    res.status(200).json({message:`Update a contact by id: ${req.params.id}`})
}

// @desc delete a contact by id
// @route DELETE /api/contacts/id
// @access public
const deleteContact = (req, res)=>{
    res.status(200).json({message:`Delete a contact by id: ${req.params.id}`})
}

module.exports ={getContacts, createContact, getContactByID, updateContact, deleteContact}