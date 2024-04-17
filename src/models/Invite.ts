import { DataTypes } from "sequelize";
import sequelize from "./sequelize";

const Invite = sequelize.define(
  "Invite",
  {
    sender_id: { type: DataTypes.INTEGER, allowNull: false },
    invited_user_id: { type: DataTypes.INTEGER, allowNull: false },
    org_id: { type: DataTypes.INTEGER, allowNull: false },
    chapter_id: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    email: { type: DataTypes.STRING, allowNull: false },
    status: {
      type: DataTypes.ENUM("invited", "accepted", "declined", "withdrawn"),
      allowNull: false,
      defaultValue: "invited",
    },
  },
  {
    tableName: "invite",
  }
);

export default Invite;
