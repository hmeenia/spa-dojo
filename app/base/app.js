define([
    "dojo/_base/declare"
], function (declare) {

var app = declare(null, {

    documentBody : document.body,

    constructor: function () {
        console.log("In constructor of app.js");
    },

    initialize: function () {
        console.log("In startup");
        require(["shell/ShellViewController.js"], function(Controller) {
            controllerVC = new Controller();
            this.documentBody.appendChild(controllerVC.domNode);
        }.bind(this));

    }
});

return new app();
});