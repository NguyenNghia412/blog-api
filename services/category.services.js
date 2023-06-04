const { throwError, ERROR_CODE } = require("../lib/error.utils");
const Category = require("../models/category.model")

/**
 * THÊM DANH MỤC
 * @param {*} param0 
 * @returns 
 */
const addCategory = async ({ name }) => {

    var oldCat = Category.find({ deleted: false, name }).exec();
    if (typeof oldCat === 'undefined') {
        throwError(ERROR_CODE.CATEGORY_NAME_DUPLICATE);
    }

    const data = await Category.create({
        name
    });

    return data;
}

module.exports = {
    addCategory
};