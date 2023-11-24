const User = sequelize.define('User', {}, {
    tableName: 'users',
    hooks : {
        beforeCreate : (record, options) => {
            record.dataValues.createdAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
            record.dataValues.updatedAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
        },
        beforeUpdate : (record, options) => {
            record.dataValues.updatedAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/g, '');
        }
    }
});