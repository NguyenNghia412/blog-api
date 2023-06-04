const { default: mongoose } = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    deleted: {
        type: Boolean,
        default: false,
    }
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;

