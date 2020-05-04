const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    default: Date.now
  },
  avatar: String,
  bgImg: String,
  summary: String,
  published: Boolean,
  firstPage: Boolean,
  detailInfo: Object,
  myAbility: Object
});

const Member = mongoose.model("members", MemberSchema);

module.exports = Member;
