
const Schema = require('../_helpers/db');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const FIELDS = {
    EMAIL: 'email',
    USERNAME: 'username',
    PASSWORD: 'password',
    ROLE: 'role',
    ACCEPT_TERMS: 'acceptTerms'
};

const SCHEMA = {
    [FIELDS.EMAIL]: { type: String },
    [FIELDS.USERNAME]: { type: String, unique: true },
    [FIELDS.PASSWORD]: { type: String }
};

const userSchema = Schema(SCHEMA);

userSchema.pre('save', async function(next) {
    await bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    })
    .catch(err => {
        return next(err);
    })
});

userSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
        delete ret._id;
        delete ret.password;
    }
});

module.exports = {
    USER_FIELDS: FIELDS,
    USER_MODEL: mongoose.model('User', userSchema)
};