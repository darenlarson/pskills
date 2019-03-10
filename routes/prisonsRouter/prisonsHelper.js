const db = require('../../data/dbConfig.js');

module.exports = {
    getAll,
    insert,
    findById
};

function getAll() {
    return db('prisons')
}