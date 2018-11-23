var Page = require('./page');

var BasicAuthPage = Object.create(Page, {
    open: {get: function() {return browser.url('http://admin:admin@the-internet.herokuapp.com/basic_auth');}},
});

module.exports = BasicAuthPage;