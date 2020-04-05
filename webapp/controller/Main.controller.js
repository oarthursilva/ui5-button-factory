sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"br/com/ButtonFactory/factory/ButtonFactory"
], function (Controller, ButtonFactory) {
	"use strict";

	return Controller.extend("br.com.ButtonFactory.controller.Main", {

		/**
		 * constructor
		 * @public
		 */
		constructor: function () {
			this.ButtonFactory = new br.com.ButtonFactory.factory.ButtonFactory();
		},

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * @memberOf com.br.ButtonFactory.view.Main
		 */
		onInit: function () {
		},

		/**
		 * Fired when button are pressed
		 * @param {sap.ui.base.Event} oEvent
		 * @memberOf com.br.ButtonFactory.view.Main
		 */
		onPress: function (oEvent, buttonId) {
			try {
				let button = this.ButtonFactory.factory(buttonId);
				button.execute(oEvent);

				sap.ui.require(["sap/m/MessageToast"], function (MessageToast) {
					MessageToast.show(buttonId);
				});

			} catch (ApplicationException) {
				alert(ApplicationException.message);
			}
		}
	});
});
