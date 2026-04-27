import { createDemoQa } from "../../PageObjects/PageAction/demoqa";
import { test } from "@playwright/test";

test("Automating iFrames", async ({ page }) => {
    const demo = createDemoQa(page);
    await demo.launchApplication();
    const frameText = await demo.getFrameHeadingText();
    console.log("Text in the frame is: " + frameText);
})