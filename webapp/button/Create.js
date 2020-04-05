sap.ui.define([
    "br/com/ButtonFactory/button/Button"
], function (Button) {
	"use strict";

	/**
	 * Creates a new Button Create.
	 *
	 *
	 * @alias br.com.ButtonFactory.button.Button
	 * @class
	 * @classdesc
	 *   Instances of this class are fired when the create button is requested.
	 *
	 * @public
	 */
	let Create = Button.extend("br.com.ButtonFactory.button.Create", {

		/**
		 * constructor
		 * @public
		 */
		constructor: function () {
		},

		/**
		 * execute
		 * @override
		 */
		execute: function () {
			console.info("processing execute");
		}
	});

	return Create;

}, /* bExport= */ true);