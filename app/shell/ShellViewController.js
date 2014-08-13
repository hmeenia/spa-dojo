define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/shellView.html",
    "dijit/layout/AccordionContainer",
    "dijit/layout/ContentPane"

], function(declare,WidgetBase, TemplatedMixin, template) {

    return declare([WidgetBase, TemplatedMixin], {

        templateString: template,

        constructor: function() {
            this.inherited(arguments);
            console.log("in shell");
        },

        postCreate: function () {
            this.inherited(arguments);
        }

    });

});