import express from 'express';
import { getUserLike,getUserRate,createUserRate, createUserLike, deleteUserLike, createUserOrder, getUserOrder } from '../Controller/userController.js';
const userRoutes = express.Router();


userRoutes.get("/get-user-like", getUserLike);
userRoutes.get("/get-user-rate",getUserRate)
userRoutes.post("/create-user-rate",createUserRate)
userRoutes.post("/create-user-like",createUserLike)
userRoutes.delete("/delete-user-like",deleteUserLike)
userRoutes.post("/create-user-order",createUserOrder)
userRoutes.get("/get-user-order/:user_id",getUserOrder)
export default userRoutes;