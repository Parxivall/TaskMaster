import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/config';
import User from './Users';

class ExternalAuthProvider extends Model {
  public id!: number;
  public user_id!: string;
  public provider_type!: string;
  public external_id!: string;
  public access_token!: string | null;
  public username!: string | null;
  public created_at!: Date;
  public updated_at!: Date;
}

ExternalAuthProvider.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    provider_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    external_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    access_token: {
      type: DataTypes.STRING(255),
    },
    username: {
      type: DataTypes.STRING(50),
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
    modelName: 'ExternalAuthProvider',
    tableName: 'ExternalAuthProviders',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  }
);

export default ExternalAuthProvider;
