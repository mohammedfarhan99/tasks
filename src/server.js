const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');
const knex = require('knex');
const { DateTime } = require('luxon');
require('dotenv').config()
const{
  CLIENT,
  DATABASE,
  PG_USER,
  PASSWORD,
  HOST,
  PG_PORT
} = process.env
//Your database credentials here
const database = knex({
    client: CLIENT,
    connection: {
      host : HOST,
      user : PG_USER,
      password : PASSWORD,
      database : DATABASE
    },
    migrations:{
        tableName: "usersTable"
    }
  });



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



//Route to get particular dates given by the user
app.get('/', (req,res)=>{
    //Accessing from_date and to_date from the url
    let from_date = req.query.from_date || (DateTime.local().year+"-"+DateTime.local().month+"-"+"01");
    let to_date = req.query.to_date || (DateTime.local().year+"-"+DateTime.local().month+"-"+DateTime.local().day);
    database('users').whereBetween('created_time',[from_date,to_date])
    .then(response => res.status(200).json(response))
    .catch(err=>res.status(400).json('query incorrect'))
}) 

//Route that gets the number of users in a particular date
app.get('/counts/',(req,res)=>{
    let from_date = req.query.from_date;
    let to_date = req.query.to_date;

    //The databste query to get the data
    database.select(database.raw('count(user_id) as usersCount, created_time'))
            .from('users')
            .whereBetween('created_time',[from_date,to_date])
            .groupBy('created_time')
            .orderBy('created_time')
    .then(response=>res.status(200).json(response))
    .catch(err=>res.status(400).json('Query incorrect'))
})




//Creates a user in the postgres database
app.post('/create_user',(req,res)=>{
    const {name,email,time} = req.body;
    // if(err) console.log(err);
    console.log(req.body);
    database('users').insert({
        user_name: name,
        email: email,
        created_time: time
    })
    .then(response => res.status(200).json('Insertion successful'))

})

app.listen(3000,()=>{
    console.log("Server Running")
})