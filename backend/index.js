const express=require('express');
const {createTodo,updateTodo}=require('./types');
const { TodoModel } = require('./db');
const app=express();
const port=3000;

app.use(express.json());

app.get('/todos',(req,res)=>{

    TodoModel.find({}).then(response=>{
        if(response){
            res.json({
                todos:response
            })
        }
    })
    
})
//body input we shall get 
// {
//  title:String
//  description:String
// }
//The above thing should be zod validated
app.post('/todos',(req,res)=>{
    const titleAndDesc=req.body;
    const parseTitleAndDesc=createTodo.safeParse(titleAndDesc);
    if(!parseTitleAndDesc.success){
        res.status(403).json({
            msg:"Todo and description are not valid"
        })
    }
    //else save inside the MongoDB
    TodoModel.create({
        title:titleAndDesc.title,
        description:titleAndDesc.description,
        completed:false
    })
    .then((response)=>{
        if(response){
            res.json({
                msg:'Todo Created Successfully'
            })
        }
    })

})

app.put('/todos',(req,res)=>{
        const id=req.body.id;
        const parsedId=updateTodo.safeParse(id);
        if(!parsedId.success){
            res.status(403).json({
                msg:'Wrong type of Id'
            })
        }
//      else find the id in the mongoDB

        TodoModel.updateOne({
            _id:id
        },{
            completed:true
        }).then(()=>{
            res.json({
                msg:'Todo udpated successfully'
            })
        })

        
})


app.listen(port,()=>{
    console.log(`App is listening at port ${port}`)
})