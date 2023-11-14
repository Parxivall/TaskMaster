import sequelize from '../config/config';
import User from './Users';
import ExternalAuthProvider from './ExternalAuthProviders';

(async () => {
  User.initModel(sequelize);
  ExternalAuthProvider.initModel(sequelize);
  console.log("tables created and synchronized correctly")

//   await sequelize.sync({ force: true });
})();