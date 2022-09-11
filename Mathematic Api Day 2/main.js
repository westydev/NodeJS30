const express = require(`express`)
const app = express()
const bodyParser = require(`body-parser`)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get(`/`, (req, res) => {
    res.send({ msg: `Hello Math Api` })
})

app.post(`/add`, (req, res) => {
    var data = req.body;
    var number1 = data.num
    var number2 = data.num2
    res.send({ data: number1 + number2 })
})

app.post(`/sour`, (req, res) => {
    var data = req.body;
    var number1 = data.num
    var number2 = data.num2
    res.send({ data: number1 - number2 })
})

app.post(`/multiply`, (req, res) => {
    var data = req.body;
    var number1 = data.num
    var number2 = data.num2
    res.send({ data: number1 * number2 })
})

app.post(`/divide`, (req, res) => {
    var data = req.body;
    var number1 = data.num
    var number2 = data.num2
    res.send({ data: number1 / number2 })
})

app.listen(3000, () => {
  console.log('Express app listening on port 3000');
});