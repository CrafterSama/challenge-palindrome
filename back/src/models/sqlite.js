import path from "path";
import sqlite from "sqlite3";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new sqlite.Database(
  path.resolve(__dirname, "../db/challenge.db"),
  (error) => {
    if (error) {
      return console.error(error);
    }

    const sql = `CREATE TABLE IF NOT EXISTS challenge (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        words VARCHAR(255) NOT NULL)`;
    db.run(sql, (error) => {
      if (error) {
        return console.error(error);
      }
      console.log("Table created successfully");
    });
  }
);

export default db;
