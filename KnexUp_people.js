const knex = require('knex')({
  client: 'pg',
  connection: {
    "user": "development",
    "password": "development",
    "database": "test_db2",
    "hostname": "localhost",
    "port": 5432,
    "ssl": true
  }
});

const input = process.argv[2];
//search with condition
knex('famous_people').where('first_name', input).orWhere('last_name', input)
.asCallback((err, res) => {
  res.forEach((a) => {
    console.log(a.first_name, a.last_name, a.birthdate)
  });
  knex.destroy();
});
