sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.nubexx.hr.odatav2.controller.main", {
        onInit() {
            let oDataModel = this.getOwnerComponent().getModel(),
                oParams = {
                    success: function (oData) {
                        debugger;
                    }.bind(this),
                    error: function (oError) {
                        debugger;
                    }.bind(this)
                };

            /*oDataModel.metadataLoaded().then(function (oEvent) {
                oKey = oDataModel.createKey("Employees", {
                    'EmployeeID': '1'
                });

                oDataModel.read("/" + oKey, oParams);
            }.bind(this));*/

        },

        onPressItem: function (oEvent) {
            let oContext = oEvent.getSource().getSelectedItems()[0].getBindingContext(),
                oItem = oContext.getObject();
            let oRouter = this.getOwnerComponent().getRouter();

            oRouter.navTo("Detail", { EmployeeID: oItem.EmployeeID });

            //debugger;
        }
    });
});