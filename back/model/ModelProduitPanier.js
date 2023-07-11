import mongoose from "mongoose";

const ProduitPanierSchema = new mongoose.Schema({
  qteAchat: {
    type: Number,
    default: 1,
  },

  idClient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  idAnnonce: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Annonce", 
    default : []
  }],
});

// On utilise ce schéma pour fabriquer le model panier
const ProduitPanier = mongoose.model("ProduitPanier", ProduitPanierSchema);

export default ProduitPanier;
