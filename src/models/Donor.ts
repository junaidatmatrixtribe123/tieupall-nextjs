import { DataTypes } from "sequelize";
import sequelize from "./sequelize";

const Donor = sequelize.define(
  "Donor",
  {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    address: { type: DataTypes.TEXT, allowNull: true, defaultValue: null },
    org_id: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
    event_id: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
    package_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    payment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    payment_type: {
      type: DataTypes.ENUM("online", "other", "cheque", "cash"),
      allowNull: true,
      defaultValue: "online",
    },
    amount: { type: DataTypes.DOUBLE, allowNull: true, defaultValue: 0 },
    notes: { type: DataTypes.TEXT, allowNull: true, defaultValue: null },
    extra_info: { type: DataTypes.TEXT, allowNull: true, defaultValue: null },
    status: {
      type: DataTypes.ENUM("active"),
      allowNull: false,
      defaultValue: "active",
    },
  },
  {
    tableName: "donor",
  }
);

export default Donor;
