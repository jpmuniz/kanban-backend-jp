require("dotenv/config");

module.exports = {
  dialect: process.env.dialect,
  host: process.env.host,
  port: process.env.dbport,
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
