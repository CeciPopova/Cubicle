const { extraxtErrorMessages } = require('../utils/errorHelpers')

module.exports = ( err, req, res, next) => {
    const errorMessages = extraxtErrorMessages(err);
    res.render('404', { errorMessages });
}