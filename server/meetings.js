const meetingsRouter = require('express').Router();

const { getAllFromDatabase, addToDatabase, deleteAllFromDatabase, createMeeting } = require('./db');



module.exports = meetingsRouter;