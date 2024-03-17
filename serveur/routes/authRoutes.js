

const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const requireAuth = require("../middleware/authMiddleware");




router.get("/profile", requireAuth, (req, res) => {
    res.status(200).json({user:req.user});
}
);

// Créer un utilisateur

router.post("/connexion", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await  User.findOne    ({ email });
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
    res.status(201).json({ message: "Utilisateur créé avec succès !" });
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
        const token = jwt.sign({ user: existingUser}, process.env.JWT_SECRET);
        res.status(200).json({ token });
    } catch (error) {
        console.error("Erreur lors de la connexion :", error);
        res.status(500).json({ error: "Erreur serveur !" });
    } 
});

module.exports = router;