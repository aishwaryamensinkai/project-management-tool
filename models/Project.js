const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    default: "Not Started",
  },
  createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
