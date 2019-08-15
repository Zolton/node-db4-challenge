
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: "Meatloaf"},
        {recipe_name: "Bacon"}
      ]);
    });
};
