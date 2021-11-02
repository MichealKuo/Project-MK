const express = require('express')

const cors = require('cors')
const app = express()
const mysql = require('mysql')
//連database
const db = mysql.createPool({
  host: 'localhost',
  user: 'Micheal',
  password: 'admin',
  database: 'pet-project',
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//get petlist
app.get('/api/getpetlist', (req, res) => {
  const Name = req.body.Name
  const Type = req.body.Type
  const sqlInsert = 'SELECT * FROM petlist '
  db.query(sqlInsert, (err, result) => {
    res.send(result)
    console.log(err)
  })
})
//get hotel list
app.get('/api/gethotellist', (req, res) => {
  const Name = req.body.Name
  const Type = req.body.Type
  const sqlInsert = 'SELECT * FROM hotellist '
  db.query(sqlInsert, (err, result) => {
    res.send(result)
    console.log(err)
  })
})
app.post('/api/insert', (req, res) => {
  const Name = req.body.name
  const Type = req.body.type
  const sqlInsert = 'INSERT INTO `petlist`( `name`, `type`) VALUES (Null,?,?)'
  db.query(sqlInsert, [Name, Type], (err, result) => {
    console.log(err)
  })
})
app.listen(3002, () => {
  console.log('running on port 3002')
})
