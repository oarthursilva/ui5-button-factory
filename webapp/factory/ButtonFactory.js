sap.ui.define([
    "sap/ui/base/Object",
    "com/br/ButtonFactory/button/Button",
    "com/br/ButtonFactory/exception/ApplicationException",
    "com/br/ButtonFactory/button/Refresh",
    "com/br/ButtonFactory/button/Create",
    "com/br/ButtonFactory/button/Download"
], function (Object, Button, ApplicationException) {
	"use strict";

    let eventId = { 
        REFRESH: "refresh",
        CREATE: "create",
        DOWNLOAD: "download"
    };

	let ButtonFactory = Object.extend("com.br.ButtonFactory.factory.ButtonFactory", {

		/**
		 * constructor
		 * @public
		 */
		constructor: function () {
        },

        /**
         * 
         * @public
         */
        factory: function (sName) {
            console.info("creating handler for button \"%s\" using factory", sName);

            if (sName === eventId.REFRESH) {
                return new com.br.ButtonFactory.button.Refresh();

            } else if (sName === eventId.CREATE) { 
                return new com.br.ButtonFactory.button.Create();
            
            } else if (sName === eventId.DOWNLOAD) { 
                return new com.br.ButtonFactory.button.Download();
            
            } else {
                console.error("No handler for \"%s\"", sName);
                throw new com.br.ButtonFactory.exception.ApplicationException("No event handler available for the button");
            }
        }
	});

	return ButtonFactory;

}, /* bExport= */ true);
