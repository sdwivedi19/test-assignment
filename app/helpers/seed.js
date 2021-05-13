import pool from '../db/dev/pool';

pool.on('connect', () => {
  console.log('connected to the db');
});


/**
 * Seed users
 */
const seed = () => {
  const seedUserQuery = `INSERT INTO
    users VALUES 
    ( default, 'samuel@gmail.com', 'Samuel', '10.01.88', 'samade', NOW()),
    ( default, 'eze@gmail.com', 'Eze', 'Kelly', '15.12.82', true, NOW()),
    ( default, 'damilola@gmail.com', 'Damilola', '08.08.08', 'adedeji2',  NOW()),
    ( default, 'temilolu@gmail.com', 'Temilola', '24.03.87', 'temitee1',  NOW()),
    ( default, 'kingsley@gmail.com', 'Kingsley', '25.03.77', 'clementking', NOW())`;
  pool.query(seedUserQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};


const seedUser = () => {
  seed();
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

export { seedUser };

require('make-runnable');
