const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const users =[
        {id:1, name:'Sabana',email:'sabana@gmail.com',number:'01877777777'},
        {id:2, name:'Sabnoor',email:'sabnoor@gmail.com',number:'01877777777'},
        {id:3, name:'Suchorita',email:'suchorita@gmail.com',number:'01877777777'},
        {id:4, name:'Suchonda',email:'suchonda@gmail.com',number:'01877777777'},
        {id:5, name:'Srabonti',email:'srabonti@gmail.com',number:'01877777777'},
        {id:6, name:'Sabila',email:'sabila@gmail.com',number:'01877777777'},
        {id:7, name:'Sohana',email:'sohana@gmail.com',number:'01877777777'},
]

app.post('/user', (req, res)=>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
    console.log(user);
})

app.get('/users', (req, res)=>{
    console.log('ok', req.query)
    const search = req.query.name;
    if(search){
        const matched =users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users)
    }
})

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    console.log(req.params.id);
    const id = parseInt(req.params.id);
    const user = users.find(u=>u.id === id);
    res.send(user);
})

app.listen(port, ()=>{
    console.log('Listening to port', port)
})

