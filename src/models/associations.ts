import User from "./User";
import RefreshToken from "./RefreshToken";
import Organization from "./Organization";
import UserOrganization from "./UserOrganization";
import Invite from "./Invite";
import Event from "./Event";
import EventOrganizer from "./EventOrganizer";
import FundPackage from "./FundPackage";
import FundField from "./FundField";
import Donor from "./Donor";

User.hasMany(RefreshToken, { onDelete: "CASCADE" });
RefreshToken.belongsTo(User);

User.hasMany(Organization, { foreignKey: "created_by" });
Organization.belongsTo(User, { foreignKey: "created_by" });

User.hasMany(UserOrganization, { foreignKey: "user_id" });
UserOrganization.belongsTo(User, { foreignKey: "user_id" });

Organization.hasMany(UserOrganization, { foreignKey: "org_id" });

User.hasMany(Invite, { foreignKey: "invited_user_id" });
Invite.belongsTo(User, { foreignKey: "invited_user_id" });

User.hasMany(Invite, { foreignKey: "sender_id" });
Invite.belongsTo(User, { foreignKey: "sender_id" });

Organization.hasMany(Invite, { foreignKey: "org_id" });
Invite.belongsTo(Organization, { foreignKey: "org_id" });

Organization.hasMany(Event, { foreignKey: "org_id" });
Event.belongsTo(Organization, { foreignKey: "org_id" });

Event.hasMany(EventOrganizer, { foreignKey: "event_id" });
EventOrganizer.belongsTo(Event, { foreignKey: "event_id" });

User.hasMany(EventOrganizer, { foreignKey: "user_id" });
EventOrganizer.belongsTo(User, { foreignKey: "user_id" });

Event.hasMany(FundPackage, { foreignKey: "event_id" });
FundPackage.belongsTo(Event, { foreignKey: "event_id" });

Event.hasMany(FundField, { foreignKey: "event_id" });
FundField.belongsTo(Event, { foreignKey: "event_id" });

Event.hasMany(Donor, { foreignKey: "event_id" });
Donor.belongsTo(Event, { foreignKey: "event_id" });
