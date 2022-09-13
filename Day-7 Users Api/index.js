const express = require(`express`)
const bodyParser = require(`body-parser`)

const usersRoutes = require(`./routes/users`)

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
