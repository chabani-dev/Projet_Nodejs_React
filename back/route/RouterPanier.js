import express from "express";
import {
  listItemsInCart,
  createProduitPanier,
  removeAnnouncementFromCart,

} from "../controller/ControllerPanier.js";
import {
 Auth
} from "../controller/ControllerUser.js";
const router = express.Router();

//POST les articles dans le panier de l'utilisateur
router.get("/", listItemsInCart);

// post Créer un nouveau panier , puis renvoyer ses données

router.post("/panier/", Auth , createProduitPanier);

// delete: Supprimer une annonce du panier

router.delete("/panier/id", Auth, removeAnnouncementFromCart);
export default router;
