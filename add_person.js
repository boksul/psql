var first_name = process.argv[2];
var last_name = process.argv[3];
var birthdate = process.argv[4];
const settings = require("./settings");
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

//insert with knex
const person = {
  first_name: first_name,
  last_name: last_name,
  birthdate: birthdate
};
console.log(person)

knex('famous_people').insert(person).then(function(result) {
  console.log(result);
  knex.destroy();
})
