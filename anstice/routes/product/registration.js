const { PRODUCT_FIELDS, PRODUCT_MODEL } = require('../../models/products');
const path = require('path');
const fs = require('fs');

module.exports = {

    upload: (req, res, next) => {
        let file = fs.readFileSync(req.body.imagePath);

        req._encode = Buffer.from(file).toString('base64');

      next();
    },

    fetchProductData: (req, res, next) => {
        req._newProduct = new PRODUCT_MODEL({
            [PRODUCT_FIELDS.IMAGE_PATH]: req._encode,
            [PRODUCT_FIELDS.PRODUCT_ID]: req.body.productId,
            [PRODUCT_FIELDS.PRODUCT_NAME]: req.body.productName,
            [PRODUCT_FIELDS.SIZE]: req.body.size,
            [PRODUCT_FIELDS.WEIGHT]: req.body.weight,
            [PRODUCT_FIELDS.RAW_MATERIAL]: req.body.rawMaterial,
            [PRODUCT_FIELDS.MANUFACTURED_BY]: req.body.manufacturedBy,
            [PRODUCT_FIELDS.RETAILER]: req.body.retailer
        });

        next();
    },
    
    saveToMongo: async (req, res, next) => {

        req._savedProduct = await req._newProduct.save()
        .then(product => { return { status: 200, error: null, data: product }})
        .catch(error => { return {status: 404, error: error, data: null };});

        next();
    },

    response: async (req, res, next) => {
        const { status, error, data } = req._savedProduct;
        res.status(status).json({error, data}).end();

        next();
    }
}