
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeSteps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeSteps').insert([
        {steps: "Prepare meatloaf.", recipe_id: 1},
        {steps: "Cook it.", recipe_id: 1},
        {steps: "Eat it.", recipe_id: 1},
        {steps: "Get pan.", recipe_id: 2},
        {steps: "Add grease.", recipe_id: 2},
        {steps: " Cook.", recipe_id: 2},
        {steps: "Eat.", recipe_id: 2},
      ]);
    });
};
