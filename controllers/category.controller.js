const categoryService = require('../services/category.services');

const createCategory = async (req, res, next) => {
    try {
        const data = await categoryService.addCategory(req.body);
        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createCategory
}