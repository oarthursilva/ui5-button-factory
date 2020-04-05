sap.ui.define(["sap/ui/base/Exception"],
    function (Exception) {
    "use strict";

	/**
	 * Creates a new ApplicationException.
	 *
	 * @param {string} message
	 *   A message explaining why the parsing of a value failed; this message is language dependent
	 *   as it may be displayed on the UI
	 *
	 * @alias com.br.ButtonFactory.exception.ApplicationException
	 * @class
	 * @classdesc
	 *   Instances of this exception are thrown when converting a string value to its model
	 *   representation fails.
	 *
	 * @public
	 */
	var ApplicationException = function (message) {
		this.name = "ApplicationException";
		this.message = message;
	};

    ApplicationException.prototype = Object.create(Error.prototype);
    ApplicationException.prototype.name = "ApplicationException";
    ApplicationException.prototype.constructor = ApplicationException;

	return ApplicationException;
}, /* bExport= */ true);
