define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/shellView.html",
    "dijit/form/Form",
    "dijit/form/ValidationTextBox"

], function(declare,WidgetBase, TemplatedMixin, template) {

    return declare([WidgetBase, TemplatedMixin], {

        templateString: template,

        constructor: function() {
            this.inherited(arguments);
            console.log("in shell");
        },

        postCreate: function () {
            this.inherited(arguments);
        },

        showSignUpForm: function () {
            this.signupDiv.classList.add("hide");
            document.getElementById("_signupInitialForm").classList.remove("hide");
        },

        signup: function () {
            if(document.getElementById("_signupInitialForm").validate()){
                console.log("form Valid");
            }
        }

    });

});