const mongoose = require("mongoose");

mongoose.connect(
    'mongodb+srv://sailesh:1234@cluster0.vm8tuzu.mongodb.net/Todo_database'
);

const TodoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todos = mongoose.model('Todos', TodoSchema);

module.exports = {
    Todos
}