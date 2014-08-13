define([
    "dojo/_base/declare",
    'dojo/dom',
    'dojo/dom-construct'
], function (declare, dom, domConstruct) {

var app = declare(null, {

    documentBody : document.body,

    constructor: function () {
        console.log("In constructor of app.js");
    },

    initialize: function () {
        console.log("In startup");
        var greetingNode = dom.byId('greeting');
        domConstruct.place('<i> Dojo!</i>', greetingNode);

        require(["shell/ShellViewController.js"], function(Controller) {
            controllerVC = new Controller();
            this.documentBody.appendChild(controllerVC.domNode);
        }.bind(this));

    }
});

return new app();
});