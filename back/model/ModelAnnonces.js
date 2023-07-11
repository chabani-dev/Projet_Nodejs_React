import mongoose, { now } from "mongoose";


const AnnonceSchema = new mongoose.Schema({
    name: String,

    Description :String,
    prix: Number,
    photo : String,
    qteDispo: {
        type: Number,
        default:"1" 
      },

    createdAt : {
        type : Date ,
        default: Date.now()
        
    
    },
        UpdateAt : {
            type : Date ,
            default: Date.now()
            
        
        },
        idClient : {type: mongoose.Schema.Types.ObjectId, ref : "User" }

    })


        // On utilise ce schéma pour fabriquer le model User
const Annonce = mongoose.model("Annonce", AnnonceSchema);


export default Annonce