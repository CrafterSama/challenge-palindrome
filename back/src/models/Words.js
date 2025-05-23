import db from "./sqlite.js";

const create = (words, callback) => {
  const sql = `INSERT INTO challenge (words) VALUES (?)`;

  const isPalindrome = (words) => {
    const cleaned = words.replace(/[^a-z0-9]/gi, "").toLowerCase();

    return cleaned === cleaned.split("").reverse().join("");
  };

  if (isPalindrome(words)) {
    db.run(sql, [words], function (error) {
      if (error) {
        return callback(error);
      }

      return callback(null, { isPalindrome: true, words });
    });
  } else {
    return callback(null, { isPalindrome: false, words });
  }
};

const findAll = (callback) => {
  const sql = `SELECT * FROM challenge`;

  db.all(sql, (error, rows) => {
    if (error) {
      return callback(error);
    }

    return callback(null, rows);
  });
};

export default {
  create,
  findAll,
};
