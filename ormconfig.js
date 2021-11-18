const {join} = require('path');

module.exports = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    migrationsRun: true,
    ssl:  {
        rejectUnauthorized: false
    } ,
    logging: false,
    entities: [join(__dirname, '/dist/models/**/*.js')],
    migrations: [join(__dirname, '/dist/migration/**/*.js')],
    subscribers: [join(__dirname, '/dist/subscriber/**/*.js')],
    cli: {
        entitiesDir: 'src/models',
        migrationsDir: 'src/migrations',
        subscribersDir: 'src/subscriber',
    },
};