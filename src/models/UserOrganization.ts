import { DataTypes } from "sequelize";
import sequelize from "./sequelize";

const UserOrganization = sequelize.define(
  "UserOrganization",
  {
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    chapter_id: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    org_id: { type: DataTypes.INTEGER, allowNull: false },
    status: {
      type: DataTypes.ENUM("active", "deleted", "pending", "inactive"),
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    tableName: "user_organization",
    defaultScope: {},
  }
);

export default UserOrganization;
