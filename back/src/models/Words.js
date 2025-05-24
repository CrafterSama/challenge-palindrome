import db from "./sqlite.js";

const create = (words, callback) => {
  const sql = `INSERT INTO challenge (words, is_palindrome) VALUES (?, ?)`;

  const isPalindrome = (words) => {
    const cleaned = words.replace(/[^a-z0-9]/gi, "").toLowerCase();

    return cleaned === cleaned.split("").reverse().join("");
  };

  let is_palindrome = false;

  if (isPalindrome(words)) {
    is_palindrome = true;
  }
  db.run(sql, [words, is_palindrome], function (error) {
    if (error) {
      return callback(error);
    }

    return callback(null, { is_palindrome, words });
  });
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
