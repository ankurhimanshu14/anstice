const { PRODUCT_MODEL } = require('../../models/products');
const fs = require('fs');
require('dotenv').config();

let IMG_PATH = process.env.IMG_PATH;

module.exports = {
    getQuery: async (req, res, next) => {
        req._query = {
            query: req.body.query
        };

        next();
    },

    fetchFromMongo: async (req, res, next) => {
        
        req._productDetails = await PRODUCT_MODEL.findOne({ 'productName': req._query.query })
            .then(result => {
                return { status: 200, error: null, data: result }
            })
            .catch(err => {
                return { status: 400, error: err, data: null }
            }
        );

        next();
    },

    response: async (req, res, next) => {
        const { status, error, data } = req._productDetails;
        
        let decode = Buffer.from(data.imagePath, 'base64').toString('utf-8');
        
        fs.writeFile(IMG_PATH + `${data.productId}.png`, decode, err => {
            if(err) {
                console.log(err);
                return
            }
        });

        res.status(status).json({ error, data }).end();

        next();
    }
}