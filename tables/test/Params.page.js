"use strict";

class Api {
    constructor(selector) {
        this.table = $(selector);
    }

    getParams() {
        return this.table.elements('tbody tr');
    }

    getParamName (rowIndex){
        //name for specific row
        return this.table.elements('tbody tr td:first-child');
    }
    

    // getRow
    // getColumn
    // getParamsDescription
    
}

module.exports = Api;