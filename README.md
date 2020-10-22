# tasks

# Step 1
Please install all dependencies by npm install.

# Step 2

Input your database credentials in .env file

Migration:
type in # knex migrate:latest # command to get the users table in your postgres database
                           OR
Create a users table in your postgres database using this (in case database migration fails):

create table users(
	user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	user_name TEXT NOT NULL,
	email text,
	created_time timestamp NOT NULL
);


Run the server.js file via nodemon server.js and make sure it is running on port 3000 in your local environment

# Step 3
Start the application by npm start 

----------------------------------------------------------------------------------

# Backend Dependencies:
# Express.js
To set up our backend.
# Cors
We use cors so that our web browser recognises our express server.
# Knex
We use the knex package to connect to our database and interact with it by inputing database queries requested by our frontend
# Luxon
We use this dependency to format data sent by our database into human understandable format
# pg
For Extensible JS ↔ PostgreSQL data-type coercion

---------------------------------------------------------------------
# Frontend Dependencies:
# react
For creating robust user interfaces

# react-dom
Paired with the react package to render the user interfaces created by react

# chart.js
For visualzing our data 

# react-chartjs-2
React wrapper for chart.js

----------------------------------------------------------------------


# How the template looks like:

[![tasks-table.png](https://i.postimg.cc/sX18j72Z/tasks-table.png)](https://postimg.cc/7G8XXC0x)

[![tasks-graph-form.png](https://i.postimg.cc/054vw2Rs/tasks-graph-form.png)](https://postimg.cc/Dm1RVhwj)

[![tasks-chart.png](https://i.postimg.cc/xTGsStP4/tasks-chart.png)](https://postimg.cc/BX65T5kT)



