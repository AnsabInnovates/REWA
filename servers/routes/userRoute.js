import express from 'express';
import {  bookVisit, cancelBooking, createUser, getallBookings, getallFavorites, toFav } from '../controllers/userCont.js';
import jwtCheck from '../config/auth0config.js';
const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id", jwtCheck, bookVisit);
router.post("/allBookings", jwtCheck, getallBookings);
router.post("/removeBooking/:id", jwtCheck, cancelBooking);
router.post("/toFav/:rid" ,jwtCheck, toFav);
router.post("/allFav", jwtCheck, getallFavorites);

export { router as userRoute }; 