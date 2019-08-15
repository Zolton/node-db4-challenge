const express = require("express");
const router = express.Router();
const RecipeFunctions = require("./Functions");

router.get("/", (req, res) => {
  RecipeFunctions.getRecipes()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      res.status(500).json({ Error: "Server status: 500" });
    });
});

router.get("/:id/shoppinglist", (req, res) => {
  const id = req.params.id;
  RecipeFunctions.getShoppingList(id)
    .then(shoppingList => {
      res.status(200).json(shoppingList);
    })
    .catch(error => {
      res.status(500).json({ Error: "Server status: 500" });
    });
});

router.get("/:id/instructions", (req, res) => {
  const id = req.params.id;
  RecipeFunctions.getInstructions(id)
    .then(instructions => {
      res.status(200).json(instructions);
    })
    .catch(error => {
      res.status(500).json({ Error: "Server status: 500" });
    });
});

module.exports = router;
