create table users
(
   userid SERIAL PRIMARY KEY,
   username VARCHAR(128) NOT NULL,
   userage INT NOT NULL
   userheight NUMERIC NOT NULL
   userbirthdate DATE NOT NULL
)

create table posts
(
   postid SERIAL PRIMARY KEY,
   posttitle VARCHAR(255) NOT NULL,
   userid INT NOT NULL
   FOREIGN KEY (userid) REFERENCES users (userid)
)