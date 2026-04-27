export async function clickElement(page, locator, timeout = 5000) {
    await page.click(locator, {timeout: timeout});
}

export async function forceClickElement(page, locator, timeout = 5000) {
    await page.click(locator, {timeout: timeout, force: true});
}

export async function fillValue(page, locator, value, timeout = 5000) {
    await page.fill(locator, value, {timeout: timeout});
}
export async function getTextContent(page, locator, timeout = 5000) {
    return await page.textContent(locator, {timeout: timeout});
}

export async function getAllMatchingElements(page, locator, timeout = 5000) {
    return await page.$$(locator, {timeout: timeout});
}