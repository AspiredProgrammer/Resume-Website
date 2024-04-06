const express = require('express');
const cors = require('cors');
const jsonData = require("./resume.json")
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

//Redirect to react app:
app.get("/", (req, res) => {
    res.redirect("https://resume-website-client.vercel.app/");
});

app.get("/getContactInfo", (req, res) => {
    res.json(jsonData.contact);
})

app.get("/getTechSkills", (req, res) => {
    res.json(jsonData.techSkills);
})

app.get("/getSoftSkills", (req, res) => {
    res.json(jsonData.softSkills);
})

app.get("/getEducation", (req, res) => {
    res.json(jsonData.education);
})

app.get("/getExperience", (req, res) => {
    res.json(jsonData.workExp);
})

app.get("/getOverview", (req, res) => {
    res.json(jsonData.overview)
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});