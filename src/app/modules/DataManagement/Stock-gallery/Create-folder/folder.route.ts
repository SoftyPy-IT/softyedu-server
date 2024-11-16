import express from 'express';
import { folderController } from './folder.controller';
 

const router = express.Router();

router
  .route('/')
  .post(
    // authorization(USER_ROLE.super_admin),
    
    folderController.createFolder,
  )
  .get(folderController.getAllFolders);

router
  .route('/:id')
  .put(
    // authorization(USER_ROLE.super_admin),
   
    folderController.updateFolder,
  )
  .delete(folderController.deleteFolder);

export const FolderRoutes = router;
