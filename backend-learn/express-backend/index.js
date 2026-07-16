const express = require('express');

const students = [
    { id: 1, name: "Tom", age: 22, city: "Delhi" },
    { id: 2, name: "Harry", age: 25, city: "Kolkata" },
    { id: 3, name: "John", age: 23, city: "Pune" },
    { id: 4, name: "Tom", age: 24, city:"Mumbai"},
    { id: 5, name: "Sahil", age:24 , city:"Delhi"},
    { id: 6, name: "Deepak", age:26, city: "Darbhanga"}
];

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("HeHeHe");
});


app.get('/students', (req, res) => {
    //res.send(students);
    res.json(students);
});

app.get('/students/:id', (req,res)=>{
    const id = req.params.id;
    const student = students.find(s => s.id == id)
    if(!student){
        res.send("No data found");
    }
    res.status(201)
    res.json(student);
})

app.get('/students/:name/:city', (req,res)=>{
    const name = req.params.name;
    const city = req.params.city;

    const student = students.find(
        s=> s.name === name && s.city === city
    )

    res.json(student);
})

app.get('/search',(req,res)=>{
    const city = req.query.city;
    //const students = students.filter()

    /*const { key, value } = req.query;
    console.log({key});
    console.log(value);*/

    const student = students.filter( s=> s.city === city);

    res.send(student);
})
app.post('/studentp', (req, res) => {
    const data = req.body;
    students.push(data);
    console.log(data);
    res.send({
        message: "Student added successfully",
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});