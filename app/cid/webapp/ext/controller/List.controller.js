sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('cid.ext.controller.List', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf cid.ext.controller.List
             */
			onInit: function () {
				debugger
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();

		
			},
		
			onBeforSave: function () {  //working
				debugger
				// Perform actions after the save operation is successful
				console.log("Save operation successful");
			
				// Show a success message to the user
				sap.m.MessageToast.show("Save operation successful");
			
				// Perform additional logic such as refreshing the data or updating UI elements
				this.refreshData(); // Example function to refresh data
				this.updateUI();    // Example function to update UI elements
			},
		
    	}
	});
});
