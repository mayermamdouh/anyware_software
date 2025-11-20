import Announcement from '../models/announcement_model.js';
import AppError from '../AppError.js';
import asyncWrapper from '../middleware/asyncWrapper.js';

export const createAnnouncement = asyncWrapper(async (req, res, next)=>{
    const annData = req.body;

    const addAnn =  await new Announcement(annData);
    await addAnn.save();
    res.status(201).json({status: 'success', data: {announcement: addAnn}});
});

export const deleteAnnouncement = asyncWrapper(async (req, res, next)=>{
    const annId = req.params.id;

    const deleteAnn = await Announcement.findById(annId);
    if(deleteAnn){
        await Announcement.deleteOne({_id: annId});
        return res.status(200).json({status: 'success', data: null});
    }
    return next(AppError.create("Announcement not found", 404, "fail"));
});

export const updateAnnouncement = asyncWrapper(async (req, res, next)=>{
    const annId = req.params.id;
    const updateData = req.body;
    
    const updateAnn = await Announcement.findByIdAndUpdate(annId,updateData, {
    new: true,
    runValidators: true,
    });

    if(!updateAnn){
        return next(AppError.create("Announcement not found", 404, "fail"));
    }
      res.status(200).json({ status: "success", data: { updateAnn } });
});

export const readOneAnnouncement = asyncWrapper(async (req,res,next)=>{
    const announcement = await Announcement.findById(req.params.id);

    if (!announcement) {
    const error = AppError.create("Announcement not found ", 404, "fail");
    return next(error);
  }
  return res.json({ status: "success", data: { announcement } });
})

export const readAllAnnouncement = asyncWrapper(async (req,res,next)=>{
    // will get all announcements but when make model for user will get the announcements by "user id" foreign key  
    const announcements = await Announcement.find();

    if (!announcements) {
    const error = AppError.create("Announcements is empty", 404, "fail");
    return next(error);
  }
  return res.json({ status: "success", data: { announcements } });
})



