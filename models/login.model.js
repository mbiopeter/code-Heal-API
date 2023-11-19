import {db} from '../db.js';

export const getUserCredentials = async (FullName, Password) => {
  const query = `
    SELECT * 
    FROM users 
    WHERE FullName = ? 
    AND password = ? 
  `;

  try {
    const [result] = await db.query(query, [FullName, Password]);
    return result;
  } 
  catch (err) {
    throw err;
  }
};
