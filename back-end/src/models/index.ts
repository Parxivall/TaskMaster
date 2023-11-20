import sequelize from '../config/config';
import User from './Users';
import ExternalAuthProvider from './ExternalAuthProviders';

(async () => {
  User.initModel(sequelize);
  ExternalAuthProvider.initModel(sequelize);

  // await sequelize.sync();
})();