let expressModule = require("express");
let app = expressModule();
app.use(expressModule.json());

let port = process.env.PORT || 4500;

app.use(expressModule.static("public"));

// custom middleware
app.use((req,res,next)=>{
    console.log("hello user");
    next(); // further execution wont happen until 'next' flag is called
})


app.listen(port, ()=>console.log(`the port ${port} is working`));


