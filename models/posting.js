const mongoose = require('mongoose')
const Schema = mongoose.Schema
const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    snils: {
        type: String,
        required: true
    },
    passport: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    date_was_born: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    date_of_registration: {
        type: String,
        required: true
    },
    social_status: {
        type: String,
        required: true
    },
    drugs: {
        type: String,
        required: true
    },
    B20_B24: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    group_DU: {
        type: String,
        required: true
    },
    type_tub: {
        type: String,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    decay: {
        type: String,
        required: true
    },
    MBT: {
        type: String,
        required: true
    },
    m_ck: {
        type: String,
        required: true
    },
    posev: {
        type: String,
        required: true
    },
    MLU_SHLU: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    date_result: {
        type: String,
        required: true
    },
    marks : {
        type: Boolean,
        required: true
    },
})

module.exports = mongoose.model('hospital', postSchema)