import express from "express";
import {
  CreateUser,
  Login,
  Auth,
  ListAnnonce,
  CreateAnnonce,
  ShowAnnonce,
  ModifierAnnonce,
  SupprimerAnnonce,
  getUserAnnonces,
} from "../controller/ControllerUser.js";
// import Annonce from '../model/ModelAnnonces.js';

const router = express.Router();

//POST Créer un nouveau match, puis renvoyer ses données
router.post("/signup", CreateUser);

// Post se connecter

router.post("/login", Login);

router.post("/auth", Auth, (req, res) => {
  res.send("coucou");
});

router.get("/annonce/all", ListAnnonce);

router.post("/annonce/", Auth, CreateAnnonce);

router.get("/annonce/id", ShowAnnonce);

router.put("/annonce/:id", Auth, ModifierAnnonce);

router.delete("/annonce/:id", Auth, SupprimerAnnonce);

router.get("/user_annonce/", Auth, getUserAnnonces);

export default router;
