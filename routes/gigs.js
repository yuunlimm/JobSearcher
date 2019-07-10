const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

router.get("/", (req, res) =>
  Gig.findAll()
    .then(gigs => {
      res.render("gigs", {
        gigs
      });
    })
    .catch(err => console.log(err))
);

// Displaying add gig form

router.get("/add", (req, res) => {
  res.render("add");
});

// add a gig
router.post("/add", (req, res) => {
  const data = {
    title: "Simple Wordpress website",
    technologies: "wordpress, javascript, html, css",
    budget: "$1000",
    description:
      "Are you able to create an app within a week or so, please email us",
    contact_email: "user2@gmail.com"
  };

  let { title, technologies, budget, description, contact_email } = data;
  // Insert into table
  Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email
  })
    .then(gig => res.redirect("/gigs"))
    .catch(err => console.log(err));
});
module.exports = router;
