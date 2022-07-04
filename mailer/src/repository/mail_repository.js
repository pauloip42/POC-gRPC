const { MailModel } = require('../model/mail_model');
const mongoose = require('mongoose');

const MailRepository = {
    async insertEmail(data) {
        const model = new MailModel(data);
        const result = await model.save();
        return result;
    },

    async findOneEmail(email) {
        const result = await MailModel.findOne({email});
        return result;
    },

    async updateOneEmail(data) {
        const obId = mongoose.Types.ObjectId(data.id);
        const result = await MailModel.findOneAndUpdate(
            {_id: obId}, 
            {email: data.email}, 
            {new: true}
        );
        return result;
    },

    async deleteOneEmail(id) {
        const obId = mongoose.Types.ObjectId(id);
        const result = await MailModel.findOneAndRemove({_id: obId});
        return result;
    }
}

module.exports = MailRepository;