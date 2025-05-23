import model from "../models/Words.js";

const store = (req, res) => {
  const { words } = req.body;

  model.create(words, (error, check) => {
    if (error) {
      return res.status(500).json({
        error,
        message: "Internal Server Error",
      });
    }
    return res.status(201).json({
      message: "Palabra(s) verificada correctamente",
      ...check,
    });
  });
};

const index = (req, res) => {
  model.findAll((error, words) => {
    if (error) {
      return res.status(500).json({
        error,
        message: "Internal Server Error",
      });
    }

    return res.status(200).json({
      message: "ok",
      words,
    });
  });
};

export default {
  store,
  index,
};
