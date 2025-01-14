exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name", 128)
        .notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("ingredient_name", 128).unique();
    })
    .createTable("recipeSteps", tbl => {
      tbl.increments();
      tbl.string("steps", 128);
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    })
    .createTable("quantities", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      tbl.string("quantity", 128);
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("quantities")
    .dropTableIfExists("recipeSteps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
