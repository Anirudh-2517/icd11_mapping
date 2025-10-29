import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["error", "warning", "info", "success"],
    default: "info"
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  service: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  details: {
    type: mongoose.Schema.Types.Mixed
  }
}, {
  timestamps: true
});

// Index for efficient querying
logSchema.index({ date: -1 });
logSchema.index({ type: 1 });
logSchema.index({ service: 1 });

const Log = mongoose.model("Log", logSchema);

export default Log;