require("dotenv").config(); // Charge les variables d'environnement

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000; // Charge le port depuis .env ou utilise 3000 par défaut

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Configuration
// const mongoUrl = "mongodb://127.0.0.1:27017"; // URL de MongoDB
const mongoUrl = process.env.MONGO_URL; //la val se trouve dans le fichier.env
let db;

// Connexion à MongoDB
MongoClient.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    db = client.db("wayuuDB");
    console.log("Connecté à MongoDB Atlas");
    app.locals.db = db;

    // Démarre le serveur une fois connecté
    app.listen(port, () =>
      console.log(`Serveur lancé sur http://localhost:${port}`)
    );
  })
  .catch((error) => {
    console.error("Erreur lors de la connexion à MongoDB Atlas", error);
    process.exit(1);
  });

// Routes
const commentsRoutes = require("./routes/comments");
app.use("/api/comments", commentsRoutes);

// Route par défaut
app.get("/", (req, res) => res.send("Serveur backend opérationnel"));
