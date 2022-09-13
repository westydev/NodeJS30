const { v4 } = require(`uuid`)

let users = [];

 const getUsers = (req, res) => {
    res.send(users);
}

 const createUser = (req, res) => {   
    const user = req.body;
    users.push({...user, id: uuid()});
};

 const getUser = (req, res) => {
    res.send(req.params.id)
};

 const deleteUser = (req, res) => { 
    users = users.filter((user) => user.id !== req.params.id);
};

 const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    user.username = req.body.username;
    user.age = req.body.age;
};

module.exports = { getUsers, createUser, getUser, deleteUser, updateUser }