const db = require('../db');

class UserController {
   async createUser(req, res) {
      try {
         const { username, userage, userheight, userbirthdate } = req.body;

         const newUser = await db.query(
            `INSERT INTO users (username, userage, userheight, userbirthdate) values (:username, :userage, :userheight, :userbirthdate) RETURNING *`,
            {
               replacements: {
                  username,
                  userage,
                  userheight,
                  userbirthdate,
               },
            },
         );
         res.json(newUser[0]);
      } catch (error) {
         console.log(error);
      }
   }
   async getUsers(req, res) {
      try {
         const users = await db.query(`SELECT * FROM users`);
         res.json(users[0]);
      } catch (error) {
         console.log(error);
      }
   }
   async getOneUser(req, res) {
      try {
         const id = req.params.id;
         const user = await db.query(`SELECT * FROM users WHERE userid = ?`, {
            replacements: [id],
         });
         res.json(user[0]);
      } catch (error) {
         console.log(error);
      }
   }
   async updateUser(req, res) {
      try {
         const id = req.params.id;
         const { username, userage, userheight, userbirthdate } = req.body;

         const updatedUser = await db.query(
            `UPDATE users set username = :username, userage = :userage, userheight = :userheight, userbirthdate = :userbirthdate  where userid = :id RETURNING *`,
            {
               replacements: {
                  username,
                  userage,
                  userheight,
                  userbirthdate,
                  id,
               },
            },
         );
         res.json(updatedUser[0]);
      } catch (error) {
         console.log(error);
      }
   }
   async deleteUser(req, res) {
      try {
         const id = req.params.id;
         await db.query(`DELETE FROM users WHERE userid = ?`, {
            replacements: [id],
         });
         res.sendStatus(204);
      } catch (error) {
         console.log(error);
      }
   }
}

module.exports = new UserController();
