var Page = require('./page');
var LoginPage = Object.create(Page, {
    username: {get: function() {return browser.$('#username')}},
    password: {get: function() {return browser.$('#password')}},
    form: {get: function() {return browser.$('.fa.fa-2x.fa-sign-in')}},
    flash: {get: function() {return browser.$('#flash')}},

    open: {get: function() {return Page.open.call(this, 'login');}},
    submit: {get: function() {return browser.click('.radius');}}
});

module.exports = LoginPage;