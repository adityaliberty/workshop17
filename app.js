/*In this workshop we had to create the same function with get,pots,put,delete,options to understand that
we can perform any action by any of these methods*/
const express = require('express');
const app = express()
app.use(express.json());

const students = [{
    "id": 1,
    "first_name": "Amerigo",
    "last_name": "Forster",
    "email": "aforster0@networkadvertising.org"
}, {
    "id": 2,
    "first_name": "Alvira",
    "last_name": "Curwen",
    "email": "acurwen1@a8.net"
}]

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})

app.get('/', (req, res) => {
    res.json({ message: "API is working" })
})
app.get('/students', (req, res) => {
    res.json(students);
})

app.post('/students', (req, res) => {
    res.json(students);
})
app.put('/students', (req, res) => {
    res.json(students);
})
app.delete('/students', (req, res) => {
    res.json(students);
})

app.options('/students', (req, res) => {
    res.json(students);
})

/*below code is only for understanding purpose*/
// app.post('/students', (req, res) => {
//     if (!req.body.email) {
//         res.status(400)
//         return res.json({ error: "email is required" })
//     }
//     const user = {
//         id: students.length + 1,
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email
//     }
//     students.push(user)
//     res.send(user)
// })

// app.put('/students/:id', (req, res) => {
//     let id = req.params.id
//     let first_name = req.body.first_name
//     let last_name = req.body.last_name
//     let email = req.body.email

//     let index = students.findIndex((student) => {
//         return (student.id == Number.parseInt(id))
//     })
//     if (index >= 0) {
//         let std = students[index]
//         std.first_name = first_name;
//         std.last_name = last_name;
//         std.email = email;
//         res.json(std)
//     }else{
//         res.status(404)
//         res.end()
//     }


// })

// app.delete('/students/:id',(req,res)=>{

//     let id = req.params.id
//     let index = students.findIndex((student) => {
//         return (student.id == Number.parseInt(id))
//     })
//      if(index>=0){
//          let std = students[index]
//          students.splice(index,1)
//          res.json(std)

//      }else{
//          res.status(404)
//          res.end()
//      }

// })