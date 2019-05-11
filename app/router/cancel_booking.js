var router = require('express').Router();
const cancel_booking = require('../controller/cancel_booking');
const { middlewareAuthUser } = require('../middleware/auth')

// create: { idBookTour, message} + token ở header
router.post('/requestCancel', middlewareAuthUser, cancel_booking.requestCancel);

router.get('/getAllProcessCancel', cancel_booking.getAllProcessCancel);

module.exports = router