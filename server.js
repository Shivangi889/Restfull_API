const express = require('express');


const app =express();

 app.use(express.json());
app.use(myMiddle)
function myMiddle(req,rep,next){
    console.log("inside the middleware i created");
    next();
}

/**
 * connect the routes to the server
 */
require('./routes/idea.routes')(app);

// starting server
app.listen(8080,()=>{
    console.log('server started');
})