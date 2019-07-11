const express = require("express");
const router = express.Router();
const Developer = require("../models/Developer");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", (req, res) =>
  Developer.findAll()
    .then(developers => res.render("developer", { developers }))
    .catch(err => console.log(err))
);

router.get("/add", (req, res) => {
  res.render("addDeveloper");
});

// add a gig
router.post("/add", (req, res) => {
  let {
    title,
    skills,
    first_name,
    last_name,
    description,
    contact_email
  } = req.body;

  let errors = [];

  // Validate/ we may use some module too
  if (!title) {
    errors.push({ text: "Please add a title" });
  }
  if (!skills) {
    errors.push({ text: "Please add some skills" });
  }
  if (!description) {
    errors.push({ text: "Please add a description" });
  }
  if (!contact_email) {
    errors.push({ text: "Please add a contact email" });
  }
  if (!first_name) {
    errors.push({ text: "Please add a first name" });
  }

  if (!last_name) {
    errors.push({ text: "Please add a last name" });
  }

  // check for erros

  if (errors.length > 0) {
    res.render("addDeveloper", {
      errors,
      title,
      skills,
      first_name,
      last_name,
      description,
      contact_email
    });
  } else {
    skills = skills.toLowerCase().replace(/, /g, ",");
    Developer.create({
      title,
      skills,
      first_name,
      last_name,
      description,
      contact_email
    })
      .then(developer => res.redirect("/developers"))
      .catch(err => console.log(err));
  }
});

module.exports = router;
