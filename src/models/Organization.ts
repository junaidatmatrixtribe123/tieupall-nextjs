import { DataTypes } from "sequelize";
import sequelize from "./sequelize";

const Organization = sequelize.define(
  "Organization",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    description: { type: DataTypes.TEXT, allowNull: true, defaultValue: null },
    email: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    photo: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    status: {
      type: DataTypes.ENUM("active", "deleted", "pending", "inactive"),
      allowNull: false,
      defaultValue: "pending",
    },
    is_public: { type: DataTypes.NUMBER, allowNull: false, defaultValue: 1 },
    created_by: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "organization",
  }
);

export default Organization;
