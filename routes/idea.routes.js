const ideaController = require('../controller/idea.controller');

/**
 * DEFINE ROUTE FOR THE CALLS LIKE
 * 
 * GET 127.0.0.1:8080/ideaApp/v1/ideas
 
 */
module.exports = (app) => {
    app.get("/ideaApp/v1/ideas", ideaController.fetchAllIdeas);
    

    //POST call
    app.post("/ideaApp/v1/ideas",ideaController.createIdeas);

    // PUT call : for update the ideas
    app.put("/ideaApp/v1/ideas/:id", ideaController.updateIdea);
    
    //delete call
    app.delete("/ideaApp/v1/ideas/:id",ideaController.deleteIdeas);
}