import { DataTypes } from "sequelize";
import sequelize from "./sequelize";

const EventOrganizer = sequelize.define(
  "EventOrganizer",
  {
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    event_id: { type: DataTypes.INTEGER, allowNull: false },
    fundraising_permission: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    ticket_permission: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    is_event_admin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.ENUM("active"),
      allowNull: false,
      defaultValue: "active",
    },
  },
  {
    tableName: "event_organizer",
  }
);

export default EventOrganizer;
