sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/br/ButtonFactory/factory/ButtonFactory"
], function (Controller, ButtonFactory) {
	"use strict";

	return Controller.extend("com.br.ButtonFactory.controller.Main", {

		constructor: function () {
			this.ButtonFactory = new com.br.ButtonFactory.factory.ButtonFactory();
		},

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.br.ButtonFactory.view.Main
		 */
		onInit: function () {
		},

		/**
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
