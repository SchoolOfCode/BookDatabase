import * as authorModel from "../models/authors.js";

export async function searchAuthorsByName(req, res, next) {
  try {
    if (req.query.search !== "") {
      const authors = await authorModel.searchAuthorsByName(req.query.search);

      if (authors.length > 0) {
        return res.json({ success: true, payload: authors });
      } else {
        return res.json({ success: false, payload: [] });
      }
    } else {
      return res.json({ success: false, payload: [] });
    }
  } catch (error) {
    return res.json({ success: false, message: error.message });
    next();
  }
  }
  


export async function getAuthors(req, res) {
  const authors = await authorModel.getAuthors();
  res.json({ success: true, payload: authors });
}

export async function getAuthorById(req, res) {
  try {
    const author = await authorModel.getAuthorById(req.params.id);
    if (author.length > 0) {
      res.json({ success: true, payload: author });
    } else {
      res.json({ success: false, payload: [] });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

export async function createAuthor(req, res) {
  const data = req.body;
  const author = await authorModel.createAuthor(data);
  res.json({ success: true, payload: author });
}

export async function updateAuthorById(req, res) {
  const data = req.body;
  const author = await authorModel.updateAuthorById(req.params.id, data);
  res.json({ success: true, payload: author });
}

export async function deleteAuthorById(req, res) {
  const author = await authorModel.deleteAuthorById(req.params.id);
  res.json({ success: true, payload: author });
}
