
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeSteps')
    .then(function () {
      // Inserts seed entries
      return knex('recipeSteps').insert([
        {steps: "Prepare meatloaf.  Cook it.  Eat it.", recipe_id: 1},
        {steps: "Get pan. Add grease.  Cook.  Eat.", recipe_id: 2}
      ]);
    });
};
