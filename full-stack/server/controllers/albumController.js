import Album from "../models/albumModel.js";

async function createAlbum(req, res) {
  try {
    const album = await Album.create(req.body);
    return res.status(201).json(album);
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function getAllAlbums(req, res) {
  try {
    const allAlbums = await Album.find();
    return res.status(200).json(allAlbums);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const getOneAlbum = async (req, res) => {
  try {
    const id = req.params.id;
    const oneAlbum = await Album.findById(id);
    return res.status(200).json(oneAlbum);
  } catch (error) {
    return res.status(500).json(err);
  }
};

const deleteAlbum = async (req, res) => {
  try {
    const id = req.params.id;
    await Album.deleteOne({ _id: id });
    //for delete and update requests, we use 200 or 204 means no content and is recommended for both
    return res.status(204).send(); //sendin an empty response without JSON data or we can do => .json({ message: "Successfully deleted" });
  } catch (error) {
    return res.status(500).json(err);
  }
};

const updateAlbum = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedAlbum = await Album.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true
    });
    return res.status(200).json(updatedAlbum);
  } catch (error) {
    return res.status(500).json(err);
  }
};

export { createAlbum, getAllAlbums, getOneAlbum, deleteAlbum, updateAlbum };
