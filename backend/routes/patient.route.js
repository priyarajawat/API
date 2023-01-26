const express = require("express")

const postUser = require("../Controller/patient.controller")


const patientRouter = express.Router();

patientRouter.post("/patient",postUser)




module.exports = patientRouter;