import { uploadMessageImage } from '../imageHandler/imgesHandler.js';
import { uploadSingleFile } from '../../middleware/fileUpload.js';
import { Router } from "express";
const imgRouter = Router();
imgRouter
    .post('/image', uploadSingleFile('image', 'messages'), uploadMessageImage);
export default imgRouter;
//# sourceMappingURL=imgs.routes.js.map