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
    return res.status(500).json({
      success: false,
      error: "Connexion à la base de données non disponible.",
    });
  }

  db.collection("comments")
    .insertOne(newComment)
    .then(() => res.status(201).json({ success: true, data: newComment }))
    .catch((error) => {
      console.error("Erreur lors de l'insertion du commentaire :", error);
      res.status(500).json({
        success: false,
        error: "Erreur lors de l'insertion du commentaire.",
      });
    });
});

// Récupérer les commentaires d'un produit
router.get("/:productId", (req, res) => {
  const { productId } = req.params;

  if (!productId) {
    return res.status(400).json({
      success: false,
      error: "L'ID du produit est requis.",
    });
  }

  const db = req.app.locals.db;
  if (!db) {
    return res.status(500).json({
      success: false,
      error: "Connexion à la base de données non disponible.",
    });
  }

  db.collection("comments")
    .find({ productId })
    .sort({ timestamp: -1 }) // Trie par date décroissante
    .toArray()
    .then((comments) => res.status(200).json({ success: true, data: comments }))
    .catch((error) => {
      console.error("Erreur lors de la récupération des commentaires :", error);
      res.status(500).json({
        success: false,
        error: "Erreur lors de la récupération des commentaires.",
      });
    });
});

module.exports = router; // Exportation du router
