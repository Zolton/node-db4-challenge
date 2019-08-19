const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

function getRecipes() {
  return db("recipes");
}

// SELECT recipes.recipe_name, ingredients.ingredient_name, quantities.quantity
// FROM recipes
// inner JOIN quantities ON recipes.id = quantities.recipe_id
// inner JOIN ingredients ON quantities.ingredient_id = ingredients.id

function getShoppingList(id) {
  return db("recipes")
    .join("quantities", "recipes.id", "=", "quantities.recipe_id")
    .join("ingredients", "quantities.ingredient_id", "=", "ingredients.id")
    .where({ recipe_id: id })
    .select("ingredients.ingredient_name", "quantities.quantity");
}

function getInstructions (id) {
    return db("recipeSteps")
    .where({recipe_id: id})
    .select("recipeSteps.steps")
}

module.exports = {
  getRecipes,
  getShoppingList, getInstructions
};
