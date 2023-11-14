import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/config';

interface UserAttributes{
  id: number;
  name: string;

}

class User extends Model {
  public id!: string;
  public phone!: string;
  public name!: string;
  public email!: string;
  public password_hash!: string | null;
  public token!: string | null;
  public roles!: string[];
  public created_at!: Date;
  public updated_at!: Date;
}
static initModel(sequelize: any) {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      phone: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },
      password_hash: {
        type: DataTypes.TEXT,
      },
      token: {
        type: DataTypes.TEXT,
      },
      roles: {
        type: DataTypes.ARRAY(DataTypes.STRING(11)),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'Users',
      timestamps: true,
      updatedAt: 'updated_at',
      createdAt: 'created_at'
    }
  );
};

export default User;
