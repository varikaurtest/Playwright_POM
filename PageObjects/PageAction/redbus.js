export default class RedBus {
  constructor(page) {
    this.page = page;
    this.fromInput = "#srcinput";
    this.suggestionItems = `//div[contains(@class,'searchCategory___7c4b56')][2]//div[@role='heading']`;
  }

  async open() {
    await this.page.goto("https://www.redbus.in/");
  }

  async selectFromCity(city) {
    await this.page.fill(this.fromInput, city);
    await this.page.waitForSelector(this.suggestionItems);

    const suggestions = this.page.locator(this.suggestionItems);
    const count = await suggestions.count();
    for (let i = 0; i < count; i++) {
      const option = suggestions.nth(i);
      const text = await option.textContent();
      console.log("From cities are: " + text);
      if (text && text.includes(city)) {
        await option.click();
        return text;
      }
    }
    throw new Error(`City not found in suggestions: ${city}`);
  }
}
