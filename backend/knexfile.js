// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql2',
        connection: {
            host: 'db',
            port: 3306,
            database: 'db_node_react',
            user: 'root',
            password: '58cbbd92ab5025c63eaa070e354363406141d48a0d47b7bdf7fcd92593610f9a'
        },
        migrations: {
            directory: './src/database/migrations'
        },
        useNullAsDefault: true,
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
