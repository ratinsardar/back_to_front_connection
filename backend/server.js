import express  from "express";
 const app=express();

 app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id: 1,
            title: "a joke",
            content: "this is joke 1"
        },
        {
            id: 2,
            title: "second joke",
            content: "this is joke 1"
        },
        {
            id: 3,
            title: "third joke",
            content: "this is joke 1"
        },
        {
            id: 4,
            title: "four joke",
            content: "this is joke 1"
        }
    ]
    res.send(jokes);
 });
 
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server athttp://localhost${port}`);
})