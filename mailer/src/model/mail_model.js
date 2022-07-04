const mongoose = require("mongoose");

const MailSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        dateTime: {
            type: Date,
            required: true
        }
    }
);

const MailModel = mongoose.model("MailModel", MailSchema);

module.exports = {
    MailModel
}