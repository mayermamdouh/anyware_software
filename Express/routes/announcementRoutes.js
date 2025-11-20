import express from 'express';
const router = express.Router();
import * as annController from '../controllers/announcementController.js';

router.route("/").post(annController.createAnnouncement).get(annController.readAllAnnouncement);


router
  .route("/:id")
  .get(annController.readOneAnnouncement)
  .patch(annController.updateAnnouncement)
  .delete(annController.deleteAnnouncement);

export default router;