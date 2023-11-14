import sequelize from '../config/config';
import User from './Users';
import ExternalAuthProvider from './ExternalAuthProviders';

export const models = {
    User,
    ExternalAuthProvider
};

sequelize.sync({ alter: true }).then(() => {
    console.log('Tables created (full synchronization).');
}).catch((error) => {
    console.error('Error synchronizing tables:', error);
});