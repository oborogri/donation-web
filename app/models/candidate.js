/**
 * Created by Grigore on 18/10/2016.
 */
'use strict';

const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  office: String,
});

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;
