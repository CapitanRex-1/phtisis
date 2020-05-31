const express = require('express')
const router = express.Router()
const Post = require('../models/posting')
var ObjectID = require('mongodb').ObjectID;

router.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
})

router.get('/:id', async (req, res) => {
    const posts = await Post.find({_id: req.params.id})
    res.status(200).json(posts)
})

router.post('/', async (req, res) => {
    const postData = {
        name: req.body.name,
        gender: req.body.gender,
        snils: req.body.snils,
        passport: req.body.passport,
        city: req.body.city,
        adress: req.body.adress,
        date_was_born: req.body.date_was_born,
        age: req.body.age,
        date_of_registration: req.body.date_of_registration,
        social_status: req.body.social_status,
        drugs: req.body.drugs,
        B20_B24: req.body.B20_B24,
        status: req.body.status,
        group_DU: req.body.group_DU,
        type_tub: req.body.type_tub,
        diagnosis: req.body.diagnosis,
        decay: req.body.decay,
        MBT: req.body.MBT,
        m_ck: req.body.m_ck,
        posev: req.body.posev,
        MLU_SHLU: req.body.MLU_SHLU,
        result: req.body.result,
        date_result: req.body.date_result,
        marks: true
    }

    const post = new Post(postData)
    await post.save()
    res.status(201).json(post)
})

router.delete('/:id', async (req, res) => {
    await Post.deleteOne({_id: req.params.id})
    res.status(200).json({
        message: 'Удалено'
    })
})

router.put('/', async (req, res) => {
    var o_id = ObjectID(req.body.idx)
    const post = {
        _id: req.body.idx,
        name: req.body.name,
        gender: req.body.gender,
        snils: req.body.snils,
        passport: req.body.passport,
        city: req.body.city,
        adress: req.body.adress,
        date_was_born: req.body.date_was_born,
        age: req.body.age,
        date_of_registration: req.body.date_of_registration,
        social_status: req.body.social_status,
        drugs: req.body.drugs,
        B20_B24: req.body.B20_B24,
        status: req.body.status,
        group_DU: req.body.group_DU,
        type_tub: req.body.type_tub,
        diagnosis: req.body.diagnosis,
        decay: req.body.decay,
        MBT: req.body.MBT,
        m_ck: req.body.m_ck,
        posev: req.body.posev,
        MLU_SHLU: req.body.MLU_SHLU,
        result: req.body.result,
        date_result: req.body.date_result,
        marks: req.body.mark
    }
    await Post.updateOne({'_id': o_id}, post)
    res.status(201).json(post)
})

module.exports = router