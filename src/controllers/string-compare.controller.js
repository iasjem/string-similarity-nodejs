const { compareTwoStrings } = require('../utils/services');
const { ERROR_RESPONSE } = require('../utils/constants');

const getComparisonMatchRate = (req, res) => {
    try {
        let payload = req.body;

        if (payload && Object.keys(payload).length > 0) {
            var results = payload.first_string && payload.second_string ? compareTwoStrings(payload.first_string, payload.second_string) : 0;
            var rounded_results = Math.round((results * 100) * 100) / 100;
            var response = {
                "status": 200,
                "message": "Strings match around: " + rounded_results + "%",
                "title": "Success!",
                "data": {
                    "result": {
                        "percentage": rounded_results,
                        "actual": results
                    },
                    "strings_sent": {
                        "0": payload.first_string ? payload.first_string : "",
                        "1": payload.second_string ? payload.second_string : ""
                    }
                }
            };
        
            res.format({
                'text/html': function () {
                    res.status(200).json(response);
                },
                'application/json': function () {
                    res.status(200).json(response);
                },
                'default': function () {
                    res.status(406).json( { "error": ERROR_RESPONSE.NOT_ACCEPTABLE } );
                }
            });
        } else {
            res.format({
                'text/html': function () {
                    res.status(400).json( { "error": ERROR_RESPONSE.NO_PAYLOAD } );
                },
                'application/json': function () {
                    res.status(400).json( { "error": ERROR_RESPONSE.NO_PAYLOAD } );
                },
                'default': function () {
                    res.status(406).json( { "error": ERROR_RESPONSE.NOT_ACCEPTABLE } );
                }
            });
        }
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
    getComparisonMatchRate
}