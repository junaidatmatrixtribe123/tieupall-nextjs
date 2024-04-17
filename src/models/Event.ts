import { DataTypes } from "sequelize";
import sequelize from "./sequelize";

const Event = sequelize.define(
  "Event",
  {
    name: { type: DataTypes.STRING(191), allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    description: { type: DataTypes.TEXT, allowNull: true },
    venue_name: {
      type: DataTypes.STRING(191),
      allowNull: true,
      defaultValue: null,
    },
    venue_address: { type: DataTypes.TEXT, allowNull: false },
    event_start: { type: DataTypes.DATE, allowNull: true },
    event_end: { type: DataTypes.DATE, allowNull: true },
    type: {
      type: DataTypes.ENUM("fund", "event"),
      allowNull: false,
      defaultValue: "event",
    },
    capacity: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
    photo: { type: DataTypes.STRING(191), allowNull: true, defaultValue: null },
    ticket_price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
    },
    booking_start: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    booking_end: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    status: {
      type: DataTypes.ENUM("active", "deleted", "pending", "inactive"),
      allowNull: false,
      defaultValue: "active",
    },
    org_id: { type: DataTypes.INTEGER, allowNull: false },
    chapter_id: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    admin_id: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  },
  {
    tableName: "event",
  }
);

export default Event;
