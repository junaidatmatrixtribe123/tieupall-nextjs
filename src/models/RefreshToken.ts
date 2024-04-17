import { DataTypes } from "sequelize";
import sequelize from "./sequelize";

const RefreshToken = sequelize.define(
  "RefreshToken",
  {
    token: { type: DataTypes.STRING },
    expires: { type: DataTypes.DATE },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    createdByIp: { type: DataTypes.STRING },
    revoked: { type: DataTypes.DATE },
    revokedByIp: { type: DataTypes.STRING },
    replacedByToken: { type: DataTypes.STRING },
    isExpired: {
      type: DataTypes.VIRTUAL,
      get() {
        return Date.now() >= this.expires;
      },
    },
    isActive: {
      type: DataTypes.VIRTUAL,
      get() {
        return !this.revoked && !this.isExpired;
      },
    },
  },
  { timestamps: false }
);

export default RefreshToken;
