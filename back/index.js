import express from "express";
import mongoose from "mongoose";
import User from "./model/ModelUser.js";
import RouterUser from "./route/RouterUser.js";
import RouterPanier from "./route/RouterPanier.js";

const app = express();
//const RouterUser = express.Router();

// Connexion à MongoDB
mongoose
  .connect(
    "mongodb+srv://Dev-chabani:Zarga0703@cluster0.rhrdope.mongodb.net/User",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //  dbName:projet_fulls
    }
  )
  .then(() => console.log("Connexion à la base de données établie"))
  .catch((error) => console.log(error));

// pour exécuter n'importe quelle requette
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", RouterUser);
app.use("/panier", RouterPanier);

const port = 3000;
app.listen(port || process.env.PORT, () =>
  console.log(`Le serveur tourne bien sur le port ${port}`)
);
