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
        expect(page.params.getParams().value).to.have.length(3);        
    });

    it('should have "selector", "ms" and "reverse" parameter', function(){
        expect(page.params.getNamesText()).to.deep.equal(['selector', 'ms', 'reverse'])
    }); 

    it('should have state that "ms" and "reverse" are optional', function(){
        expect(page.params.getOptionalParamsNames()).to.deep.equal(['ms', 'reverse']);
    }); 

    it.only('should list "selector" as the first parameter', function(){
        const row = page.params.getRow(0);
        console.log(row);

        expect(row).to.deep.equal(['selector','String', 'element selector to wait for']);
    }); 



});