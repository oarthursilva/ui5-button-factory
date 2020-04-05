sap.ui.define([
    "br/com/ButtonFactory/button/Button"
], function (Button) {
	"use strict";

	/**
	 * Creates a new Button Refresh.
	 *
	 *
	 * @alias br.com.ButtonFactory.button.Button
	 * @class
	 * @classdesc
	 *   Instances of this class are fired when the refresh button is requested.
	 *
	 * @public
	 */
	let Refresh = Button.extend("br.com.ButtonFactory.button.Refresh", {

		/**
		 * constructor
		 * @public
		 */
		constructor: function () {
		},

		// /**
		// /* execute
		//  * @override
		//  */
		// execute: function () {
		// 	console.info("processing execute");
		// } 
	});

	return Refresh;

}, /* bExport= */ true);