import { expect } from "@playwright/test";
import DemoQALoc from "../PageLocators/demoqa";

class DemoQa{
  constructor(page){
    this.page = page;
    this.locators = DemoQALoc;
  }

  async launchApplication(){
    await this.page.goto(this.locators.url, {timeout: 90000});
  }

  async clickAlertButton(){
    
    this.page.on("dialog", async d=> {
      console.log("alert is ", d.message());
      expect(d.type()).toBe("alert");
      d.accept();
    
    })

    await this.page.click(this.locators.alertButton);    
  }
  async clickConfirmAlert(){
    await this.page.on("confirmAlert", async alert => {
      expect(alert.type).toContain("confirm");
      expect (alert.message()).toContain("Do you confirm action?")
      await alert.dismiss();
    })
    await this.page.click("#confirmButton");
   // await this.page.locator("#confirmResult").isvisible();
    const clickMsg = await this.page.locator("#confirmResult").textContent();
    expect(clickMsg).toContain("You selected ")
    expect(clickMsg).toContain("Cancel");
  }

  async getFrameHeadingText() {
    const frameHeading = this.page.frameLocator("#frame1").locator("#sampleHeading");
    await expect(frameHeading).toBeVisible();
    return await frameHeading.textContent();
  }
}

export default DemoQa;

// Factory function for convenience
export const createDemoQa = (page) => new DemoQa(page);
 