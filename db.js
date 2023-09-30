const mysql = require('mysql');

const con = mysql.createConnection({

host:'localhost',
database:'storechat',
user:'root',
password:'',
port:3307

})

con.connect((err)=>{

    if(err){
        console.log('err occures to connecting database',err)
    }else{
        console.log('connected to database')
    }

})

con.execute(
    'INSERT INTO chats (sender, receiver, message, timestamp) VALUES (?, ?, ?, ?)',
    [names, 'receiverUsername', message.trim(), timestamp],
    (err, results) => {
      if (err) {
        console.error('Error saving message to MySQL database:', err);
      } else {
        console.log('Message saved to MySQL database');
      }
    }
  );






module.exports = con;


