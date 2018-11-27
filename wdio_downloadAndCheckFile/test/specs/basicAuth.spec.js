var BasicAuth = require('../pageObjects/basicAuth.page');
var expect = require('chai').expect;

describe('basic auth tests', function(){
    it('should sign in', function(){
        BasicAuth.open;
        let mssg = $('#content').getText();
        expect(mssg).to.contain('Congratulations! You must have the proper credentials.');
    });
});