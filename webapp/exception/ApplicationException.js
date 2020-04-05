sap.ui.define([
	"sap/ui/base/Exception"
], function (Exception) {
    "use strict";

	/**
	 * Creates a new ApplicationException.
	 *
	 * @param {string} message
	 *   A message explaining why the application processing failed; this message is language dependent
	 *   as it may be displayed on the UI
	 *
	 * @alias br.com.ButtonFactory.exception.ApplicationException
	 * @class
	 * @classdesc
	 *   Instances of this exception are thrown when the application fails.
	 *
	 * @public
	 */
	let ApplicationException = function (message) {
		this.name = "ApplicationException";
		this.message = message;
	};

    ApplicationException.prototype = Object.create(Error.prototype);
    ApplicationException.prototype.name = "ApplicationException";
    ApplicationException.prototype.constructor = ApplicationException;

	return ApplicationException;
	
}, /* bExport= */ true);
