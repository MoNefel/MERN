import { Router } from "express";
import * as bookController from "../controllers/bookControllers.js";

const router = Router();

router
  .route("/books")
  .get(bookController.getAllBooks)
  .post(bookController.addBook);

router
  .route("/books/:id")
  .get(bookController.getOneBook)
  .delete(bookController.deleteBook)
  .patch(bookController.updateBook);

export default router;
