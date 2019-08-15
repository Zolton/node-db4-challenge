
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quantities').insert([
        {recipe_id: 1, quantity: "1 pound", ingredient_id: 1},
        {recipe_id: 1, quantity: "3 eggs", ingredient_id: 2},
        {recipe_id: 2, quantity: "5 strips", ingredient_id: 3},
        {recipe_id: 2, quantity: "5 ounces", ingredient_id: 4},
      ]);
    });
};
