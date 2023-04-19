const ideas= require("../Models/idea_db.model");

/**
 * search all ideas
 */
exports.fetchAllIdeas=(req,rep)=>{
    rep.status(200).send(ideas);
}

let idCount =1;

/**
 * create new idea
 */
exports.createIdeas=(req,rep)=>{

    //read the request body
    const idea = req.body;

    //need to generate the next idea id
    idea.id = ++idCount;

    //save it in the list of existing idea
    ideas[idCount]=idea;

    // return the response
    rep.status(201).send(ideas[idCount]);
}


/**
 * update idea
 */
exports.updateIdea =(req,rep)=>{
    // I need to read the id passed in the path
    // 127.0.0.1:8080/ideaApp/v1/ideas/1
    const ideaId = req.params.id;

    // If the idea is present - modify else return error
    if(ideas[ideaId]){
        ideas[ideaId]=req.body;
        rep.status(200).send(ideas[ideaId]);
    }else{
        rep.status(400).send({
            message:'idea Id passed was not correct'
        })
    }
}


/**
 * delete idea
 */
exports.deleteIdeas=(req,rep)=>{
    //check if present yes delete, ne return error msg
    if(ideas[req.params.id]){
        delete ideas[req.params.id];
        rep.status(200).send({
            message:"Successfully deleted"
        })
    }else{
        rep.status(400).send({
            message:"wrong idea id"
        })
    }
}