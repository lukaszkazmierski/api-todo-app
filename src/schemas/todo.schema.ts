import * as mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    },

}, {
    collection: 'todos',
});

const TodoSchema = mongoose.model('TodoSchema', todoSchema);
export default TodoSchema;