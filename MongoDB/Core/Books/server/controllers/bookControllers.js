import Book from "../models/bookModel.js";

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBook = await Book.findById(id);
    return res.status(200).json(oneBook);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const upBook = await Book.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true
    });
    return res.status(201).json(upBook);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.deleteOne({ _id: id });
    return res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};

export { deleteBook, updateBook, addBook, getAllBooks, getOneBook };
