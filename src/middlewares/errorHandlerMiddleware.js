const { extraxtErrorMessages } = require('../utils/errorHelpers')

module.exports = ( err, req, res, next) => {
    const erorMessages = extraxtErrorMessages(err);
    res.render('404', { erorMessages });
}