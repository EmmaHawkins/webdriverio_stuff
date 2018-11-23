var Page = require('./page');

var DownloadPage = Object.create(Page, {

    open: { value: function() {
        Page.open.call(this, 'download'); 
    }},   
});

module.exports = DownloadPage;