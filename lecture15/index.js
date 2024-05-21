const express= require("express");

const app=express();
app.use(express.json())

app.listen(4000);
const books = [
    {
        id: '1',
        name: 'Personal Finance',
        price: 500,
    },
    {
        id: '2',
        name: 'Javascript for dummies',
        price: 1000,
    },
    {
        id: '3',
        name: 'JavaScript the definitive guide',
        price: 1500,
    },
    {
        id: '4',
        name: "You don't know js yet",
        price: 2500,
    },
    {
        id: '5',
        name: 'Atomic Habits',
        price: 100,
    },
    {
        id: '6',
        name: 'JavaScript the good parts',
        price: 1200,
    },
];

app.get("/",(req,res)=>{
    res.send("<h1>MaShaAllah</h1>")
})
app.get("/books",(req,res)=>{
    const {show,price}=req.query;
    if(show ==='all'||!price){
        return res.json(books)
    }
    else{
        return res.json(books.filter(book=>book.price<=price));
    }
})
app.post("/books",(req,res)=>{//req.body জেসন ফরমেটে আসবে তাই এটি সঠিক ভাবে পেতে একটি মিডেলওয়ার ব্যবহার করতে হবে ==> app.use(express.json())
    console.log(req.body);
    books.push(req.body);
    res.json(books);
})
