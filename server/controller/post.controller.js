const db = require('../db');

class PostController {
   async getPosts(req, res) {
      try {
         const posts = await db.query(`SELECT * FROM posts`);
         res.json(posts[0]);
      } catch (error) {
         console.log(error);
      }
   }
}

module.exports = new PostController();
