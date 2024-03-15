const express = require("express");

const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");




// Créer un utilisateur
router.post("/connexion", async (req, res) => { 
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Cet email est déjà utilisé" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ newUser });
    console.log("Utilisateur créé avec succès !", newUser);
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res.status(500).json({ error: "Erreur serveur !" });
  }
}
);

// Authentification
router.post("/connexion", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne ({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }
    res.status(200).json({ user: existingUser });
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(500).json({ error: "Erreur serveur !" });
  }
}
);

// Voir tous les utilisateurs
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    res.status(500).json({ error: "Erreur serveur !" });
  }
}
);

module.exports = router;
