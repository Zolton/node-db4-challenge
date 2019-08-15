
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: "meat"},
        {ingredient_name: "eggs"},
        {ingredient_name: "bacon"},
        {ingredient_name: "grease"}
      ]);
    });
};
