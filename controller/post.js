import { db } from '../connect.js';


// export const createPost = (req, res) => {
//     const { employee_id, post_content, likes_count, comment_count, post_photo } = req.body;
//     // Check if the employee_id exists in the employee table
//     const employeeQuery = "SELECT * FROM `employee` WHERE employee_id = ?";
    
//     db.query(employeeQuery, [employee_id], (employeeErr, employeeResult) => {
//         if (employeeErr) return res.status(500).json(employeeErr);
//         if (employeeResult.length === 0) {
//             return res.status(404).json({ message: "Employee not found" });
//         }

//         // If employee exists, proceed to insert the post
//         const insertQuery = "INSERT INTO `posts` (employee_id, post_content, post_date, likes_count, comment_count, post_photo) VALUES (?, ?, NOW(), ?, ?, ?)";
//         // Removed extra closing parenthesis at the end of the query above
        
//         db.query(insertQuery, [employee_id, post_content, likes_count, comment_count, post_photo], (err, result) => {
//             if (err) return res.status(500).json(err);
//             return res.json({ message: "Post added successfully", post_id: result.insertId });
//         });
//     });
// };
export const createPost = (req, res) => {
    const { employee_id, post_content, likes_count, comment_count, post_photo } = req.body;
    const selectAccountTypesQuery = "SELECT account_type FROM `account`";

    db.query(selectAccountTypesQuery, (error, accountTypes) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        const matchedAccountTypes = [];
        for (const { account_type } of accountTypes) {
            if (post_content.includes(account_type)) {
                matchedAccountTypes.push(account_type);
            }
        }

        const insertPostQuery = "INSERT INTO `posts` (employee_id, post_content, post_date, likes_count, comment_count, post_photo) VALUES (?, ?, NOW(), ?, ?, ?)";
        db.query(insertPostQuery, [employee_id, post_content, likes_count, comment_count, post_photo], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Error adding post" });
            }

            const insertedPostId = result.insertId;

            // Create alerts for matched account types if the post was added successfully
            if (matchedAccountTypes.length > 0) {
                const insertAlertsQuery = "INSERT INTO `alerts` (account_id, post_id, seen_alert) SELECT account_id, ?, 0 FROM `account` WHERE account_type IN (?)";
                db.query(insertAlertsQuery, [insertedPostId, matchedAccountTypes], (alertErr) => {
                    if (alertErr) {
                        console.error(alertErr);
                        return res.status(500).json({ error: "Error creating alerts" });
                    }

                    return res.json({ message: "Post added successfully", post_id: insertedPostId });
                });
            } else {
                return res.json({ message: "Post added successfully", post_id: insertedPostId });
            }
        });
    });
};

export const updatePost = (req, res) => {
    const postId = req.params.id;
    const updatedFields = req.body;

    if (Object.keys(updatedFields).length === 0) {
        return res.status(400).json({ message: "No fields provided for update" });
    }

    const updateQuery = "UPDATE `posts` SET ? WHERE post_id = ?";
    db.query(updateQuery, [updatedFields, postId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Error updating post", error: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.json({ message: "Post updated successfully" });
    });
};

export const deletePost = (req, res) => {
    const post_id = req.params.id;
    const deleteQuery = "DELETE FROM `posts` WHERE post_id = ?";
    
    db.query(deleteQuery, [post_id], (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.json({ message: "Post deleted successfully" });
    });
};
export const getAllPosts = (req, res) => {
    const searchTerm = req.query.search || ''; // Get the search term from query params or default to an empty string
    const query = "SELECT * FROM `posts` WHERE post_content LIKE ?"; // Adjust the query to filter posts by content
    
    db.query(query, [`%${searchTerm}%`], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.json(result);
    });
};

export const getPostById = (req, res) => {
    const employee_id = req.params.id;
    console.log("Employee ID:", employee_id); // Log to check the received employee_id
    const query = "SELECT * FROM `posts` WHERE employee_id = ?";
    
    db.query(query, [employee_id], (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) {
            return res.status(404).json({ message: "Post not found" });
        }
        return res.json(result);
    });
};


// export const createPost = (req, res) => {
//     const { employee_id, post_content, likes_count, comment_count, post_photo } = req.body;
//     // Check if the employee_id exists in the employee table
//     const employeeQuery = "SELECT * FROM `employee` WHERE employee_id = ?";
    
//     db.query(employeeQuery, [employee_id], (employeeErr, employeeResult) => {
//         if (employeeErr) return res.status(500).json(employeeErr);
//         if (employeeResult.length === 0) {
//             return res.status(404).json({ message: "Employee not found" });
//         }

//         // If employee exists, proceed to insert the post
//         const insertQuery = "INSERT INTO `posts` (employee_id, post_content, post_date, likes_count, comment_count, post_photo) VALUES (?, ?, NOW(), ?, ?, ?)";
//         // Removed extra closing parenthesis at the end of the query above
        
//         db.query(insertQuery, [employee_id, post_content, likes_count, comment_count, post_photo], (err, result) => {
//             if (err) return res.status(500).json(err);
//             return res.json({ message: "Post added successfully", post_id: result.insertId });
//         });
//     });
// };



