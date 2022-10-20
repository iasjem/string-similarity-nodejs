const ERROR_RESPONSE = {
    NO_PAYLOAD: {
        title: "Bad Request",
        message : "You need to specify a payload to proceed with your request.",
        status: 400
    },
    NOT_ACCEPTABLE: {
        title: "Not Acceptable", 
        message: "Content type is not acceptable.",
        status: 406
    },
    SERVER_ERROR: {
        title: "Server Error", 
        message: "Something went wrong with the server. Please try again later.",
        status: 500
    }
};

module.exports = {
    ERROR_RESPONSE
}