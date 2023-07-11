import ProduitPanier from "../model/ModelProduitPanier.js";
import Annonce from "../model/ModelAnnonces.js";
import User from "../model/ModelUser.js";

// 1-Répertoriez les articles dans le panier de l'utilisateur :
export const listItemsInCart = async (req, res) => {
  const userId = req.params.userId;
  // 1. `wait ProduitPanier.find({ idClient: userId })` : cette partie interroge la collection `ProduitPanier` dans la base de données et récupère tous les documents où le champ `idClient` correspond au `userId` spécifié. Cela vous donnera un tableau de documents `ProduitPanier`.
  try {
    const items = await ProduitPanier.find({ idClient: userId }).populate(
      "idAnnonce"
    );
    // 2.populate("idAnnonce")` : cette méthode est enchaînée à la requête `find()` et indique à Mongoose de remplir le champ `idAnnonce` avec le document `Annonce` référencé.
    // Lorsque la méthode `populate()` est appelée avec le nom de champ `"idAnnonce"`, Mongoose remplace automatiquement le champ `idAnnonce` dans chaque document `ProduitPanier` par le document `Annonce` correspondant extrait de la collection `Annonce` en fonction de le référence.
    // En utilisant `populate("idAnnonce")`, vous pouvez récupérer l'objet `Annonce` complet au lieu d'avoir simplement l'ID de référence dans les documents `ProduitPanier`. Cela vous permet d'accéder à tous les champs et propriétés du document `Annonce` associé.
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// 2-Créez un nouvel ProduitPanierélément et envoyez ses données :

// export const createProduitPanier = async (req, res) => {

//   try {
//     const { qteAchat, idAnnonce } = req.body;
//     let client = await User.find({_id : req.payload.id})
//     let id2 = client._id
//     let newAnnonce = await ProduitPanier.create({
//       qteAchat,
//       idClient:id2,
//       idAnnonce: [idAnnonce]
//    });
//    newAnnonce.idAnnonce.push(idAnnonce);
//     await newAnnonce.save();
//     res.status(201).json(newAnnonce);
//   } catch (err) {
//     res.status(400).json({ error: "Bad Request" });
//   }
// };
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
