import express from 'express';
import { createPost, deletePost, updatePost, getAllPosts, getPostById } from '../controller/post.js';
import { db } from '../connect.js'; // Import the db connection

const router = express.Router();

router.get('/', (req, res) => {
    if (req.query.search) {
        getAllPosts(req, res); // If search term exists, use the getAllPosts function
    } else {
        // If no search term, return all posts
        // Your default route logic without the search functionality
        const query = "SELECT * FROM `posts`";
        db.query(query, (err, result) => {
            if (err) return res.status(500).json(err);
            return res.json(result);
        });
    }
});



router.get('/:id', getPostById);
 router.post('/', createPost);

router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
