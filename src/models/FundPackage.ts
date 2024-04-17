import { DataTypes } from "sequelize";
import sequelize from "./sequelize";

const FundPackage = sequelize.define(
  "FundPackage",
  {
    org_id: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
    event_id: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DOUBLE, allowNull: true, defaultValue: 0 },
    status: {
      type: DataTypes.ENUM("active"),
      allowNull: false,
      defaultValue: "active",
    },
  },
  {
    tableName: "fund_package",
  }
);

export default FundPackage;
