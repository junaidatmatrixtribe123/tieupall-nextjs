import { DataTypes } from "sequelize";
import sequelize from "./sequelize";

const FundField = sequelize.define(
  "FundField",
  {
    org_id: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
    event_id: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
    name: { type: DataTypes.STRING, allowNull: false },
    status: {
      type: DataTypes.ENUM("active"),
      allowNull: false,
      defaultValue: "active",
    },
  },
  {
    tableName: "fund_field",
  }
);

export default FundField;
