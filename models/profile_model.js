const mongoose = require("mongoose")

const ProfileSchema = new mongoose.Schema(
    {
        username: {
          type: String,
          required: true,
          unique: true,
        },
        name: String,
        profession: String,
        DOB: String,
        titleline: String,
        about: String,
        img: {
          type: String,
          default: "",
        },
      },
      {
        timestamps: true,
      }
    );

module.exports = mongoose.model("Profile", ProfileSchema);

