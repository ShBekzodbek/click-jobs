require('dotenv').config();

const ErrorHandler = (err, req, res, next) => {
    const errStatus = err.statusCode || 500, errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.ENV === 'dev' ? err.stack : {}
    })
}

module.exports = ErrorHandler;