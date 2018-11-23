const { URL } = require('url');
const path = require('path');
const fs = require('fs');
const assert = require('assert');
const checkExistsWithTimeout = require('../../utils/checkIfExistsWithTimeout');
const DownloadPage = require('../pageObjects/download.page');


describe('Downloads', () => {
    it('should download the file', () => {
        DownloadPage.open();
        const downloadLink = $('*=some-file.txt');
        downloadLink.click();
        const downloadHref = downloadLink.getAttribute('href');
        const downloadUrl = new URL(downloadHref);
        const fullPath = downloadUrl.pathname;
        const splitPath = fullPath.split('/');
        const fileName = splitPath.splice(-1)[0];
        const filePath = path.join(global.downloadDir, fileName);
        browser.call( function () {
            return checkExistsWithTimeout(filePath, 60000);
        });
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        console.log('File contents are: ', fileContents);
        
        assert.ok(fileContents.includes('asdf'));
    });
});