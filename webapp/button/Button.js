sap.ui.define([
	"sap/m/Button",
], function (Button) {
	"use strict";

	/**
	 * Creates a new Button Abstraction.
	 *
	 *
	 * @alias br.com.ButtonFactory.button.Button
	 * @class
	 * @classdesc
	 *   Abstraction of button to be used in Button Instances.
	 *
	 * @public
	 */
	let ButtonAbstract = Button.extend("br.com.ButtonFactory.button.Button", {

		/**
		 * constructor
		 * @public
		 */
		constructor: function () {
		},

		/**
		 * execute
		 * @abstract 
		 */
		execute: function () {
			console.warn("implementation missing for method \"execute\"");
		}
	});

	return ButtonAbstract;

}, /* bExport= */ true);