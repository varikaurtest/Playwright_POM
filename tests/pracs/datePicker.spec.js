import { test } from "@playwright/test";
import BlogPost from "../../PageObjects/PageAction/blogpost";

test("Handling date picker", async ({ page }) => {
    const blogpostObj = new BlogPost(page);
    await blogpostObj.visitBlogPost();

    const today = new Date();
    const date = String(today.getDate()).padStart(2, "0") + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + today.getFullYear();

    await blogpostObj.setDatePickerValue(date);
    await blogpostObj.verifyDatePickerValue(date);
    await blogpostObj.selectDateFromDatePicker(today);

    console.log("Today's date is: " + date);
})