import { pool } from "../db/index.js";

export async function getAuthors() {
  // Query the database and return all authors
  const allAuthors = await pool.query("SELECT * FROM authors"); //use http://localhost:3000/api/authors to see the result in Thunder Client
  return allAuthors.rows;
}

export async function searchAuthorsByName(searchTerm) {
  try {
    const searchByName = await pool.query(`SELECT * FROM authors WHERE first_name LIKE '${searchTerm}'`);
    return searchByName.rows;
  } catch (error) { console.log("error") }; 
  // Query the database and return all authors that have a name matching the searchTerm
}

export async function getAuthorById(id) {
  // Query the database and return the book with a matching id
  try {
    const authorById = await pool.query(`SELECT * FROM authors WHERE id = $1`, [id]);
    return authorById.rows;
  } catch (error) { console.log("error")  };
}

export async function createAuthor(author) {
  try {
    const createAuthorName = await pool.query(`INSERT INTO authors(first_name, last_name) VALUES ($1, $2) RETURNING *`, [author.first_name, author.last_name]);
    return createAuthorName.rows;
  } catch (error) {
    console.log(error);
  }
}
  


export async function updateAuthorById(id, updates) {
  try {
    const updateAuthorId = await pool.query(`UPDATE authors SET first_name = $1, last_name = $2 WHERE id = $3 RETURNING *`, [updates.first_name, updates.last_name, id]);
    return updateAuthorId.rows;
  } catch (error) {
    console.log(error);
  }
  return {};
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author
  return {};
}
