/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comparker/pricechangereport/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
