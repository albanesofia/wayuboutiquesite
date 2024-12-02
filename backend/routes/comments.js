const express = require("express");
const router = express.Router(); // Initialisation du router

// Ajouter un commentaire
router.post("/", (req, res) => {
  const { productId, rating, comment, username } = req.body;

  if (!productId || !rating || !comment) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  const newComment = {
    productId,
    rating,
    comment,
    username: username || "Anonyme", // Nom d'utilisateur par défaut
    timestamp: new Date(),
  };

  const db = req.app.locals.db;
  if (!db) {
    return res
      .status(500)
      .json({ error: "Connexion à la base de données non disponible." });
  }

  db.collection("comments")
    .insertOne(newComment)
    .then(() => res.status(201).json(newComment))
    .catch((error) =>
      res
        .status(500)
        .json({ error: "Erreur lors de l'insertion du commentaire." })
    );
});

// Récupérer les commentaires d'un produit
router.get("/:productId", (req, res) => {
  const { productId } = req.params;

  const db = req.app.locals.db;
  if (!db) {
    return res
      .status(500)
      .json({ error: "Connexion à la base de données non disponible." });
  }

  db.collection("comments")
    .find({ productId })
    .toArray()
    .then((comments) => res.json(comments))
    .catch((error) =>
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des commentaires." })
    );
});

module.exports = router; // Exportation du router
