const connection =require("../models/db")

const createComment = (req, res) => {
    const {  user_id, post_id, comment_text } = req.body;

    const sql = `INSERT INTO comments (user_id, post_id, comment_text) VALUES (?, ?, ?)`;
    connection.query(sql, [user_id, post_id, comment_text], (err, result) => {
        if (err) {
            console.error('Error creating comment:', err);
            return res.status(500).json({ message: 'Failed to create comment' });
        }
        const comment_id = result.insertId;
        console.log('Comment created successfully', post_id, user_id,comment_id);
        res.status(201).json({ message: 'Comment created successfully', result});
    });
};










module.exports =createComment

