const mongoose=require('mongoose');
const {Schema,model}=mongoose;

mongoose.connect('mongodb+srv://adityakarki201:wyUHqdsl2mWDZhNC@cluster0.lfktvqf.mongodb.net/todoApp')

const storeTodoSchema= new Schema({
    title:String,
    description:String,
    completed:Boolean
})

const TodoModel=model('Todo',storeTodoSchema);

module.exports={
    TodoModel
}