var Page = require('./page');

var DownloadPage = Object.create(Page, {
    open: {get: function() {return browser.url('/' + 'download');}}
});

module.exports = DownloadPage;