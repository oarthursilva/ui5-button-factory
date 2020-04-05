sap.ui.define([
    "br/com/ButtonFactory/button/Button"
], function (Button) {
	"use strict";

	/**
	 * Creates a new Button Download.
	 *
	 *
	 * @alias br.com.ButtonFactory.button.Button
	 * @class
	 * @classdesc
	 *   Instances of this class are fired when the download button is requested.
	 *
	 * @public
	 */
	let Download = Button.extend("br.com.ButtonFactory.button.Download", {

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

	return Download;

}, /* bExport= */ true);