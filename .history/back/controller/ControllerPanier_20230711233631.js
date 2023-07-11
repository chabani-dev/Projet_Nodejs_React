import ProduitPanier from "../model/ModelProduitPanier.js";
import Annonce from "../model/ModelAnnonces.js";
import User from "../model/ModelUser.js";

// 1-Répertoriez les articles dans le panier de l'utilisateur :
export const listItemsInCart = async (req, res) => {
  const userId = req.params.userId;
  try {
    const items = await ProduitPanier.find({ idClient: userId }).populate(
      "idAnnonce"
    );
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// 2-Créez un nouvel ProduitPanierélément et envoyez ses données :

export const createProduitPanier = async (req, res) => {
  try {
    const { qteAchat, idAnnonce } = req.body;
    let client = await User.findOne({ _id: req.payload.id });
    let newAnnonce = await ProduitPanier.create({
      qteAchat,
      idClient: client._id,
      idAnnonce: [idAnnonce], // Ajouter l'idAnnonce dans un tableau
    });
    newAnnonce.idAnnonce.push(idAnnonce); // Ajouter l'idAnnonce au tableau existant
    await newAnnonce.save();
    res.status(201).json(newAnnonce);
  } catch (err) {
    res.status(400).json({ error: "Bad Request" });
  }
};

// 3-Supprimer une annonce du panier et retourner ses données :
export const removeAnnouncementFromCart = async (req, res) => {
  const productId = req.params.productId;

  try {
    const removedItem = await ProduitPanier.findByIdAndRemove(productId);

    if (!removedItem) {
      return res.status(404).json({ error: "Annonce pas trouvé" });
    }

    res.status(200).json(removedItem);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
