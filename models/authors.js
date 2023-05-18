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
    const authorById = await pool.query(`SELECT * FROM authors WHERE id = ${id}`);
    return authorById.rows;
  } catch (error) { console.log("error")  };
}

export async function createAuthor(author) {
  // Query the database to create an author and return the newly created author
  return {};
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author
  return {};
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author
  return {};
}
