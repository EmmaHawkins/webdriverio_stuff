"use strict";

class Api {
    constructor(selector) {
        this.table = $(selector);
    }

    getParams() {
        return this.table.elements('tbody tr');
    }

    getNames (){
        return this.table.elements('tbody tr td:first-child');
    }

    getNamesText(){
        let names = this.getNames().getText();
        return names.map(function(text){
            return text.replace('optional', '').trim();
        });
    }

    getOptionalParamsNames(){
        let names = this.getNames().getText();
        let filteredNames = names.filter(function(text){
            return text.includes('optional');
        });
        return filteredNames.map(function(text){
            return text.replace('optional', '').trim();
        });
    }

    getRow(index){
        const row = this.getParams(index);
        return row.elements('td').getText();
    }
    

    // getRow
    // getColumn
    // getParamsDescription
    
}

module.exports = Api;