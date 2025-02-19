import { Router } from "express";
import * as albumController from "../controllers/albumController.js";

const router = Router();

router
  .route("/albums")
  .get(albumController.getAllAlbums)
  .post(albumController.createAlbum);

router
  .route("/albums/:id")
  .get(albumController.getOneAlbum)
  .delete(albumController.deleteAlbum)
  .put(albumController.updateAlbum);

export default router;
