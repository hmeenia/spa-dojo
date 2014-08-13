define([
    "dojo/_base/declare",
    'dojo/dom',
    'dojo/dom-construct'
], function (declare, dom, domConstruct) {

var app = declare(null, {

    constructor: function () {
        console.log("In constructor of app.js");
        var greetingNode = dom.byId('greeting');
        domConstruct.place('<i> Dojo!</i>', greetingNode);
    }
});

return new app();
});