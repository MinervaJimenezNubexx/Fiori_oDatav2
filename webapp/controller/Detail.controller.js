sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (BaseController) => {
    "use strict";

    return BaseController.extend("com.nubexx.hr.odatav2.controller.Detail", {
        onInit() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("Detail").attachMatched(this.onRouteMatched, this);

            debugger;
        },

        onRouteMatched: function (oEvent) {
            let oParams = oEvent.getParameter("arguments"),
                oDataModel = this.getView().getModel(),
                sPath = oDataModel.createKey("Employees", {"EmployeeID": oParams.EmployeeID})

            this.getView().bindElement("/" + sPath);

        }

    });
});