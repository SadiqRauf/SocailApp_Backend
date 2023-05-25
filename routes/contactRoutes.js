const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContactByID,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

// router.route("/").get(getContacts);
// router.route("/").post(createContact);
router.route("/").get(getContacts).post(createContact);

// router.route("/:id").get(getContactByID);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);
router
  .route("/:id")
  .get(getContactByID)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
