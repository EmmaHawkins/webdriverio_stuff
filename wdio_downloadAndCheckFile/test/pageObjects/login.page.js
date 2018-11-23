var Page = require('./page');
var LoginPage = Object.create(Page, {
    username: {get: function() {return browser.$('#username')}},
    password: {get: function() {return browser.$('#password')}},
    form: {get: function() {return browser.$('.fa.fa-2x.fa-sign-in')}},
    flash: {get: function() {return browser.$('#flash')}},

    open: { value: function() {
        Page.open.call(this, 'login'); 
    }},

    submit: {value: function(){
        this.form.submitForm();
    }}
});

module.exports = LoginPage;