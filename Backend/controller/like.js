const connection = require("../models/db")

const addLike =(req,res)=>{
    const token = req.headers.authorization.split(' ')[1];
    const user_id = req.token.user_id;
const post_id =req.body
const sql = `INSERT INTO likes (user_id, post_id) VALUES (16, 128);`;

connection.query(sql, [user_id,post_id], (err, result) => {
    if (err) {
      console.error('Error creating like:', err);
      return res.status(500).json({ message: 'Failed to create like' });
    }
    console.log('Like created successfully');
    res.status(201).json({ message: 'Like created successfully', like_Id: result.insertId });
  });
}


const deleteLikebyId=(req,res)=>{
    const token = req.headers.authorization.split(' ')[1];
    const user_id = req.token.user_id;
    const post_id = req.params.post_id; // تغيير هنا لاستخدام req.params

    
    const sql = 'DELETE FROM likes WHERE user_id=? AND post_id=?';
  
    connection.query(sql, [user_id,post_id], (error, result) => {
      if (error) {
        console.error('Failed to delete like data:', error);
        return res.status(500).json({ message: 'Failed to delete like data' });
      }
 
      console.log('like data deleted successfully');
      res.status(200).json({ message: 'like data deleted successfully' });
    });}
module.exports={addLike,deleteLikebyId}
  