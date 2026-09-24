const express = require('express');
const Note = require("./models/notes.model")

const app = express();


app.use(express.json());


app.post("/api/create-note",async(req,res)=>{

    

   try{
    const {title,content}=req.body;

    const newNote = new Note(
        {
            title:title,
            content:content,
        }
    );

    await newNote.save();

    res.status(201).json({
        "message":"Note created Successsfully",
        note:newNote
        
    });

   } catch(err) {

    console.log(err);
    res.status(500).json({
            message: "Failed to create note",
            error: err.message
        });
    
   };

    
    

});
app.get("/api/notes",async(req,res)=>{

    try{
        const notes = await Note.find({});

    res.status(200).json({

        message:"Notes fetched sucessfully",
        notes:notes,

    });
    }catch(err) {
        console.log(err);


        
    }




});
app.patch("/api/update-note/:id",async(req,res)=>{

    const {id} = req.params;
    
    const update = req.body;


   try{
     const updatedNote = await Note.findByIdAndUpdate(
        id,
        update,
    );

    if(!updatedNote){
        res.status(404).json({
            message:"note doesnt exists",
        });
    }
    res.status(200).json({
        messsge:"Note updated",
        note:updatedNote,
    });
   }catch(err){

    console.log(err.message);
    res.status(500).json({
        message:"failed to update the note ",
        error:err.message,
    });
    
   }
    
});
app.delete("/api/delete-note/:id",async(req,res)=>{


    const {id} = req.params;

    try{

        const deletedNote = await Note.findByIdAndDelete(id);


     if (!deletedNote) {
            return res.status(404).json({
                message: "Note doesn't exist"
            });
        }

        res.status(200).json({
            message: "Note deleted successfully",
            note: deletedNote
        });

    } catch (err) {

        console.log(err.message);

        res.status(500).json({
            message: "Failed to delete the note",
            error: err.message
        });}

});










module.exports=app;