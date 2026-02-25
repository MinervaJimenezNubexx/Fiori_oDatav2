sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.nubexx.hr.odatav2.controller.main", {
        onInit() {
            let oDataModel = this.getOwnerComponent().getModel(),
          oParams = {
            success: function(oData){
              debugger;
            }.bind(this),
            error: function(oError){
              debugger;
            }.bind(this)
          };
          
        oDataModel.read("/Employees", oParams)

        }
    });
});