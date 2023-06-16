/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon1 = {
  name: 'Pikachu',
};

describe('pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => pokemon.sync({ force: true })
    .then(() => pokemon.create(pokemon1)));
  describe('GET /pokemon', () => {
    it('should get 200', () =>
      agent.get('/pokemon').expect(200)
    );
  });
});
// const { expect } = require('chai');
// const session = require('supertest-session');
// const app = require('../../src/app.js');
// const { pokemon, conn } = require('../../src/db.js');

// const agent = session(app);
// const pokemon1 = {
//   name: 'Pikachu',
// };

// describe('pokemon routes', () => {
//   beforeAll(() => {
//     return conn.authenticate()
//       .catch((err) => {
//         console.error('Unable to connect to the database:', err);
//       });
//   });

//   beforeEach(() => {
//     return pokemon.sync({ force: true })
//       .then(() => pokemon.create(pokemon1));
//   });

//   afterAll(() => {
//     return conn.close();
//   });

//   describe('GET /pokemon', () => {
//     it('should get 200', () => {
//       return agent.get('/pokemon').expect(200);
//     });
//   });
// });
