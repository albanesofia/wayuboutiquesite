const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Configuration
const mongoUrl = "mongodb://127.0.0.1:27017"; // URL de MongoDB
const dbName = "wayuuDB"; // Nom de la base de données
let db; // Variable globale pour la connexion

// Connexion à MongoDB
MongoClient.connect(mongoUrl, {})
  .then((client) => {
    db = client.db(dbName);
    console.log(`Connecté à la base de données : ${dbName}`);
    app.locals.db = db; // Associe la connexion à app.locals pour la rendre disponible dans les routes
  })
  .catch((error) => {
    console.error("Erreur lors de la connexion à MongoDB", error);
    process.exit(1); // Termine le processus si MongoDB n'est pas accessible
  });

// Routes
const commentsRoutes = require("./routes/comments");
app.use("/api/comments", commentsRoutes);

// Route par défaut pour tester
app.get("/", (req, res) => res.send("Serveur backend opérationnel"));

// Démarrer le serveur
app.listen(port, () =>
  console.log(`Serveur lancé sur http://localhost:${port}`)
);
