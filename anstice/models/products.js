const mongoose = require('mongoose');
const Schema = require('../_helpers/db');

FIELDS = {
    IMAGE_PATH: 'imagePath',
    PRODUCT_ID: 'productId',
    PRODUCT_NAME: 'productName',
    SIZE: 'size',
    WEIGHT: 'weight',
    RAW_MATERIAL: 'rawMaterial',
    MANUFACTURED_BY: 'manufacturedBy',
    RETAILER: 'retailer'
};

SCHEMA = {
    [FIELDS.IMAGE_PATH]: { type: Buffer },
    [FIELDS.PRODUCT_ID]: { type: String, unique: true },
    [FIELDS.PRODUCT_NAME]: { type: String },
    [FIELDS.SIZE]: { type: String },
    [FIELDS.WEIGHT]: { type: Number },
    [FIELDS.RAW_MATERIAL]: { type: String },
    [FIELDS.MANUFACTURED_BY]: { type: String },
    [FIELDS.RETAILER]: { type: String }
}

const productSchema = new Schema(SCHEMA);

module.exports = {
    PRODUCT_FIELDS: FIELDS,
    PRODUCT_MODEL: mongoose.model('Product', productSchema)
}