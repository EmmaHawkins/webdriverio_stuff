var LoginPage = require('../pageObjects/login.page');
var expect = require('chai').expect;

describe('Login Form', function(){
    it('Should not login with the incorrect credentials', function(){
        LoginPage.open;
        LoginPage.username.setValue('tomith');
        LoginPage.password.setValue('SuperSecssword!');
        LoginPage.submit;
        expect(LoginPage.flash.getText()).to.contain('Your username is invalid!');  
    });

    it('should login in when correct credentials are entered', function(){
        LoginPage.open;
        LoginPage.username.setValue('tomsmith');
        LoginPage.password.setValue('SuperSecretPassword!');
        LoginPage.submit;
        expect(LoginPage.flash.getText()).to.contain('You logged into a secure area!');  

    });
});
