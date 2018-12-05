const expect = require('chai').expect;
let Api = require('./Api.page');


describe('The waitForExist API Page', function() {
    let page;

    beforeEach(function() {   
        page = new Api('utility/waitForExist');
        page.open();  
    });

    it('should load the page', function() {
        expect(browser.getUrl()).to.contain('waitForExist');        

    });

    it('should have a params table', function() {
        expect(page.params.table.isExisting()).to.be.true;     

    });

    it('should have three parameters listed in the params table', function() {
        
        //expect numParams to be 3

        expect(page.params.getParams()).to.have.length(3);        

    });



});