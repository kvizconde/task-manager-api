/* CRUD : CREATE, READ, UPDATE, DELETE */
/* POST, GET, PATCH, DELETE */
const app = require('./app');

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
