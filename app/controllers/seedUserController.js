import pool from '../db/dev/pool';
import {
    hashPassword,
  } from '../helpers/validations';
import {
  status,
} from '../helpers/status';
/**
   * Create A User
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
const seedUser = async (req, res) => {
  const seedUserQuery = `INSERT INTO
  users VALUES 
  ( default, 'samuel@gmail.com', 'Samuel', '10.01.88', '${hashPassword('samade')}', NOW()),
  ( default, 'eze@gmail.com', 'Eze', '15.12.82', '${hashPassword('ezekelly')}', NOW()),
  ( default, 'damilola@gmail.com', 'Damilola', '08.08.08', '${hashPassword('adedeji2')}', NOW()),
  ( default, 'temilola@gmail.com', 'Temilola', '24.03.87', '${hashPassword('temitee1')}', NOW()),
  ( default, 'kingsley@gmail.com', 'Kingsley', '25.03.77', '${hashPassword('clementking')}', NOW())`;
  
  try {
    const { rows } = await pool.query(seedUserQuery);
    const dbResponse = rows;
    if (!dbResponse) {
      return res.status(status.bad).send('Seeding Was not Successful');
    }
    return res.status(status.created).send('Seeding Users table Was Successful');
  } catch (error) {
    return res.status(status.error).send('An Error occured try later');
  }
};

export default seedUser;
