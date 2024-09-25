import postgres from "postgres";
require("dotenv").config(); // Loads environment variables from a .env file.

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

// Creating a PostgreSQL connection using the provided configuration.
export const sql = postgres({
  host: PGHOST, // The host of your PostgreSQL server.
  database: PGDATABASE, // The database name.
  username: PGUSER, // The username for your database.
  password: PGPASSWORD, // The password for your database.
  port: 5432, // Default port for PostgreSQL.
  ssl: "require", // Ensures SSL connection is required.
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

// Exporting the sql instance to be used elsewhere in the project.
