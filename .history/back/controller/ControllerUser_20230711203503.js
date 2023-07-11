import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/ModelUser.js";
import Annonce from "../model/ModelAnnonces.js";

/**
 * create user (= register)
 */
export const CreateUser = async (req, res) => {
  try {
    let { email, fullname, password } = req.body;
    let Users = await User.create({ email, fullname, password });
    res.status(200).json(Users);
  } catch (err) {
    res.status(400).json(err);
  }
};

/**
 * login (return jwt)
 */
export const Login = async (req, res) => {
  try {
    // on récupère dans la bdd le user qui tente de se connecter
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      let isMatch = await bcrypt.compare(req.body.password, user.password);
      if (isMatch) {
        //console.log(user)
        let token = jwt.sign({ id: user.id }, "secret_key", {
          expiresIn: "1h",
        });
        res.status(200).json({ token, email: user.email });
      } else {
        res.status(400).json({ message: "Invalid mot de pass" });
      }
    } else res.status(400).json({ message: "User n'éxiste pas" });
  } catch (err) {
    res.status(400).json({ message: "Erreur pendant inscription" });
  }
};

//Nous allons construire une fonction qui permettra le traitement préalable d'un jwt avant d'autoriser un traitement
export const Auth = (req, res, next ) => {
  // on récupère le jwt 'brut' stocké dans le header de la requête, dans 'authorization'
  let token = req.headers.authorization.replace("Bearer ", "");
  jwt.verify(token, "secret_key", function (err, payload) {
    if (err) {
      res.status(401).json({ message: "Unauthorized" });
    } else {
      req.payload = payload;
      next();
    }
  });
};

export const Auth1 =  async (req, res, next ) => {
  let u = await User.findById(req.payload.id)
    if (u.role !=='A') {
        res.status(401).json({ message: "Vous n'avez pas la permission "});
    } else      
      next();
    

}

export const ListAnnonce = async (req, res) => {
  try {
    const postList = await Post.find();

    if (!postList) {
      res.status(404).json({ status: 404, message: "Pas d'articles trouvés" });
      return;
    }
    res.status(200).json(postList);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const CreateAnnonce = async (req, res) => {
  try {
    //let { email, password } = req.body;

    let a = await Annonce.create(req.body);
    console.log(a)
    let user = await User.findById(req.payload.id);
     console.log(user);
    user.annonces.push(a);
    await user.save();
    res.status(200).json(a);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const ShowAnnonce = async (req, res) => {
  try {
    let { id } = req.params;
    let annonces = await Annonce.findById(id);
    res.status(200).json(annonces);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const ModifierAnnonce = async (req, res) => {
  try {
    let { id } = req.params;
    let { prix , photo } = req.body;
    let annonces = await Annonce.findById(id);
    annonces.prix = prix;
    annonces.photo= photo;
    await annonces.save();
    res.status(200).json(annonces);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const SupprimerAnnonce = async (req, res) => {
  try {
    let { id } = req.params;
    let annonces = await Annonce.findById(id);
    await annonces.deleteOne();
    res.status(200).json(annonces);
  } catch (err) {
    res.status(400).json(err);
  }
};

//récuperer les annonce de user
export const getUserAnnonces = async (req, res) => {
  const userId = req.params.userId;

  try {
    // Trouver l'utilisateur avec l'ID spécifié
    const user = await User.findById(userId);

    if (!user) {
      // Utilisateur non trouvé
      return res.status(404).json({ error: "User not found" });
    }

    // Récupérer les annonces associées à l'utilisateur
    const annonce = await Annonce.find({ userId: userId });

    res.status(200).json(annonce);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
