// employees.js
import express from 'express';
import { addemployee,delete_employee,edit_employee,loginEmployee } from '../controller/employee.js'; // Import the controller function

const router = express.Router();
router.post('/login',loginEmployee)
router.post('/', addemployee);
router.delete("/:id", delete_employee);
router.put("/:id",edit_employee);
export default router;
