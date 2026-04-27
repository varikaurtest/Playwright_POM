import { test } from "@playwright/test";
import { createDemoQa } from "../../PageObjects/PageAction/demoqa";

test("launch application - demoqa", async ({ page }) => {
	const demo = createDemoQa(page);
	await demo.launchApplication();
	//await demo.clickAlertButton();
	await demo.clickConfirmAlert();
/* 3 alert types will need below validations 
	await page.on("dialog", async alert => {
		alert.message() === gives message 
	expect(alert.type).toContain("alert"); //simple alert 
	expect(alert.type).toContain("confirm"); //Ok cancel alert
	expect(alert.type).toContain("prompt"); //enter value and submit alert
	alert.accept("Varinder"); //for prompt alert, pass the value to be entered in the alert
	*/
});
