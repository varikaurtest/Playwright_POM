import blogpostLoc from "../PageLocators/blogpost";
import { expect } from "@playwright/test";

export default class BlogPost {
  constructor(page) {
    this.page = page;
  }

  async visitBlogPost() {
    await this.page.goto(blogpostLoc.url);
    const pgTitle = await this.page.title();
    expect(pgTitle).toBe(blogpostLoc.pageTitle);
  }

  async selectDropDownSingleOption() {
    await this.page.locator(blogpostLoc.dropDownCountry).isVisible();
    await this.page.selectOption(blogpostLoc.dropDownCountry, "India");
    await this.page.selectOption(blogpostLoc.dropDownCountry, { label: "India" });

    const options = await this.page.$$(blogpostLoc.countryOptions);
    for (let option of options) {
      console.log("Options in the drop down are: " + await option.textContent());
    }
  }

  async selectDropDownMultiSelect() {
    await this.page.selectOption(blogpostLoc.dropDownColours, ["Blue", "Red"]);
    const cOptions = await this.page.locator(blogpostLoc.coloursOptions).all();
    for (let option of cOptions) {
      console.log("Options for color are: " + await option.textContent());
      if ((await option.textContent()) === "Blue" || (await option.textContent()) === "Red") {
        await this.page.selectOption(blogpostLoc.dropDownColours, { label: await option.textContent() });
      }
    }
  }

  async setDatePickerValue(date) {
    await this.page.fill(blogpostLoc.datePickerInput, date);
    await this.page.keyboard.press("Escape");
  }

  async verifyDatePickerValue(date) {
    await expect(this.page.locator(blogpostLoc.datePickerInput)).toHaveValue(date);
  }

  async openDatePickerWidget() {
    await this.page.click(blogpostLoc.datePickerTrigger);
    await expect(this.page.locator(blogpostLoc.datePickerWidget)).toBeVisible();
  }

  async selectDateFromDatePicker(dateObj) {
    const day = String(dateObj.getDate()).padStart(2, "0");
    const monthNum = String(dateObj.getMonth() + 1);
    const year = String(dateObj.getFullYear());

    await this.openDatePickerWidget();
    await this.page.selectOption(blogpostLoc.datePickerMonthSelect, monthNum);
    await this.page.selectOption(blogpostLoc.datePickerYearSelect, year);
    await this.page.click(blogpostLoc.datePickerDay(day));
  }

  async getTableRowCount() {
    return await this.page.locator(blogpostLoc.tableRows).count();
  }

  async getTablePagesCount() {
    return await this.page.locator(blogpostLoc.tablePagination).count();
  }

  async getTableDataFromPage(pageIndex) {
    await this.page.locator(`${blogpostLoc.tablePagination}[${pageIndex + 1}]`).click();
    const rows = this.page.locator(blogpostLoc.tableRows);
    const count = await rows.count();
    const data = [];
    for (let i = 0; i < count; i++) {
      const product = await rows.nth(i).locator("td").nth(0).textContent();
      const price = await rows.nth(i).locator("td").nth(1).textContent();
      data.push({ product, price });
    }
    return data;
  }

  async getAllTableDataAcrossPages() {
    const totalPages = await this.getTablePagesCount();
    const allData = [];
    for (let i = 0; i < totalPages; i++) {
      await this.page.locator(`${blogpostLoc.tablePagination}[${i + 1}]`).click();
      const rows = this.page.locator(blogpostLoc.tableRows);
      const count = await rows.count();
      for (let r = 0; r < count; r++) {
        const product = await rows.nth(r).locator("td").nth(0).textContent();
        const price = await rows.nth(r).locator("td").nth(1).textContent();
        allData.push({ product, price });
      }
    }
    return allData;
  }

  async mouseActions(){
    const mouseHoverEle = this.page.locator("button.dropbtn").first();
    await mouseHoverEle.scrollIntoViewIfNeeded();
    await expect(mouseHoverEle).toBeVisible();
    await mouseHoverEle.hover();
    await expect(this.page.locator(".dropdown-content a").nth(0)).toBeVisible();
  }
}
