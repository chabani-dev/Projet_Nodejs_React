import mongoose, { now } from "mongoose";
import bcrypt  from "bcrypt";

const userSchema = new mongoose.Schema({
    fullname: {
        type :String,  require : true},

    email : {
        type:String,
        unique : true,
        require : true

    },
    password: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now()
      },
        UpdateAt : {
            type : Date ,
            default: Date.now()
            
        },
        role: {
            type: String,
            require: true,
            default: 'U',
        },
       
       annonces : [{type: mongoose.Schema.Types.ObjectId, ref : "User"}]
    })


/**
 * ici on prévoit un traitement préalable à la création d'un user, instance de User, qui permet d'encrypter le mdp
 */ 
userSchema.pre("save", async function() {
    // on vérifie si le mdp n'est pas déjà encodé
    if (this.isModified("password")){
        // l'encryptage se déroule ici
        this.password = await bcrypt.hash(this.password, 10)
    }
})

    // On utilise ce schéma pour fabriquer le model User
    export default mongoose.model("User", userSchema);
