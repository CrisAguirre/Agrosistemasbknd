const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  currentSimulationId: {
    type: Number,
    default: 1
  },
  simulationData: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  completedSimulations: [{
    type: Number
  }],
  lastSavedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  collection: 'agrosistemas'
});

const Progress = mongoose.model('Progress', progressSchema);
module.exports = Progress;
