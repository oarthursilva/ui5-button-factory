sap.ui.define([
    "sap/ui/base/Object",
    "br/com/ButtonFactory/button/Button",
    "br/com/ButtonFactory/exception/ApplicationException",
    "br/com/ButtonFactory/button/Refresh",
    "br/com/ButtonFactory/button/Create",
    "br/com/ButtonFactory/button/Download"
], function (Object, Button, ApplicationException) {
	"use strict";

    const eventId = { 
        REFRESH: "refresh",
        CREATE: "create",
        DOWNLOAD: "download"
    };

	/**
	 * Creates a new Button Factory.
	 *
	 *
	 * @alias br.com.ButtonFactory.button.Button
	 * @class
	 * @classdesc
	 *   Instances of this class create button handlers.
	 *
	 * @public
	 */
	let ButtonFactory = Object.extend("com.br.ButtonFactory.factory.ButtonFactory", {

		/**
		 * constructor
		 * @public
		 */
		constructor: function () {
        },

        /**
         * factory
         * @public
         */
        factory: function (sName) {
            console.info("creating handler for button \"%s\" using factory", sName);

            if (sName === eventId.REFRESH) {
                return new br.com.ButtonFactory.button.Refresh();

            } else if (sName === eventId.CREATE) { 
                return new br.com.ButtonFactory.button.Create();
            
            } else if (sName === eventId.DOWNLOAD) { 
                return new br.com.ButtonFactory.button.Download();
            
            } else {
                console.error("No handler for \"%s\"", sName);
                throw new com.br.ButtonFactory.exception.ApplicationException("No event handler found");
            }
        }
	});

	return ButtonFactory;

}, /* bExport= */ true);
