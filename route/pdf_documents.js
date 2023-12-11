import  express  from "express";
import { getPdfForInteraction,getPdfForTransaction,insertPdfDocument } from "../controller/pdf_document.js";    

const router = express.Router()
router.get("/i/:id", getPdfForInteraction);
router.post("/", insertPdfDocument);
router.get("/t/:id", getPdfForTransaction);


export default router