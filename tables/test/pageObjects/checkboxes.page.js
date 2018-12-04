var Page = require('./page');
var CheckboxPage = Object.create(Page, {
    checkbox1: {get: function() {return $('#checkboxes > input[type="checkbox"]:nth-child(1)');}},
    checkbox2: {get: function(){ return $('#checkboxes > input[type="checkbox"]:nth-child(3)')}},
    open: {get: function() {return browser.url('/' + 'checkboxes');}}
});


module.exports = CheckboxPage;