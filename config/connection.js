const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "Admin@123",
      database: "amazone",
      port:3306
    },
  });

  module.exports = knex;