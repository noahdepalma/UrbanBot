const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
});

require('./models/tag.js');

const force = process.argv.includes('--force') || process.argv.includes('-f');

db.sync({ force }).then(async () => {
    console.log('Database synced.');

    db.close();
}).catch(console.error);