import express from 'express';
import { createProduct,deleteProduct,updateProduct,getAllProducts,getProductById,getProductsUnderAccountPrice } from '../controller/product.js'; // Import the controller function

const router = express.Router();
router.post('/',createProduct)
router.get('/', (req, res) => {
    if (req.query.search) {
        getProductById(req, res); // Call getProductById for searching
    } else {
        getAllProducts(req, res); // Call getAllProducts for retrieving all products
    }
});
router.get('/underprice/:account_id', getProductsUnderAccountPrice);

router.delete("/:id", deleteProduct);
router.put("/:id",updateProduct);
export default router;
