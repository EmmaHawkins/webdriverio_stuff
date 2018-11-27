var CheckboxPage = require('../pageObjects/checkboxes.page');
var expect = require('chai').expect;

describe('Checkbox page', function(){
    it('should tick only checkbox 1', function(){
        CheckboxPage.open;
        CheckboxPage.checkbox1.click();
        expect(CheckboxPage.checkbox1.isSelected()).to.be.true;
        expect(CheckboxPage.checkbox1.isSelected()).to.not.be.false;
    });

    it('should only tick checkbox 2', function(){
        CheckboxPage.open;
        CheckboxPage.checkbox2.click();
        expect(CheckboxPage.checkbox2.isSelected()).to.be.false;
        expect(CheckboxPage.checkbox2.isSelected()).to.not.be.true;

    });

    it('should tick both checkboxes', function(){
        CheckboxPage.open;
        CheckboxPage.checkbox1.click();
        expect(CheckboxPage.checkbox1.isSelected()).to.be.true;
        expect(CheckboxPage.checkbox2.isSelected()).to.be.true;

    });

    it('should untick both checkboxes', function(){
        CheckboxPage.open;
        CheckboxPage.checkbox2.click();
        expect(CheckboxPage.checkbox2.isSelected()).to.be.false;
        expect(CheckboxPage.checkbox1.isSelected()).to.be.false;

    });

    it('should untick a ticked checkbox', function(){
        CheckboxPage.open;
        CheckboxPage.checkbox1.click();
        CheckboxPage.checkbox1.click();
        expect(CheckboxPage.checkbox1.isSelected()).to.be.false;
        

    });
})