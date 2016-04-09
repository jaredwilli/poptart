var m = require('./utils/mocks.js');

/**
 * Return Server Data
 */

function getPeople() {
    return m.people;
}

module.exports = {
    people: getPeople()
};
