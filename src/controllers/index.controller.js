const path = require('path');

const { ERROR_RESPONSE } = require('../utils/constants');

const getIndexPage = (req, res) => {
    try {
        var htmlPath = path.join(__dirname, '..', '..', 'public', 'index.html');

        res.format({
            'text/html': function () {
                res.sendFile(htmlPath);
            },
            'default': function () {
                res.status(406).json( { "error": ERROR_RESPONSE.NOT_ACCEPTABLE } );
            }
        });
    } catch(err) {
        console.error(err);

        res.format({
            'text/html': function () {
                res.status(500).json( { "error": ERROR_RESPONSE.SERVER_ERROR } );
            },
            'application/json': function () {
                res.status(500).json( { "error": ERROR_RESPONSE.SERVER_ERROR } );
            },
            'default': function () {
                res.status(406).json( { "error": ERROR_RESPONSE.NOT_ACCEPTABLE } );
            }
        });
    }
}

module.exports = {
    getIndexPage
}