import mongoose from "mongoose";

const settingSchema = new mongoose.Schema({
  theme: {
    type: String,
    default: "light"
  },
  backupSchedule: {
    type: String,
    default: "daily"
  },
  aiModelVersion: {
    type: String,
    default: "1.0.0"
  },
  systemMaintenanceMode: {
    type: Boolean,
    default: false
  },
  defaultLanguage: {
    type: String,
    default: "en"
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});

const Setting = mongoose.model("Setting", settingSchema);

export default Setting;