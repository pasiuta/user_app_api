const Joi = require('joi');
exports.userValidationCreate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(60).required().pattern(/^[a-zA-Z\s]+$/).required(),
        email: Joi.string().min(2).max(100).required().pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).required(),
        phone: Joi.string().min(4).max(20).required().pattern(/^[\+]{0,1}380([0-9]{9})$/).required(),
        positionId: Joi.number().min(1).max(100000).positive().required(),
        password: Joi.string().min(3).max(40).required(),
    })
    return schema.validate(data);
}
exports.userValidationGet = (data) => {
    const schema = Joi.object({
        id: Joi.number().min(1).max(100000).positive(),
    })
    return schema.validate(data);
}
exports.usersValidationGet = (data) => {
    const schema = Joi.object({
        page: Joi.number().min(1).max(100000).positive(),
        size: Joi.number().min(1).max(100000).positive(),
    })
    return schema.validate(data);
}
exports.userValidationLogin = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(2).max(100).required().pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/),
        password: Joi.string().min(3).max(40).required(),
    })
    return schema.validate(data);
}

