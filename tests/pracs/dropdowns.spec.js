import { test } from "@playwright/test";
import BlogPost from "../../PageObjects/PageAction/blogpost";
import RedBus from "../../PageObjects/PageAction/redbus";

test.skip("Select drop downs on blogpost", async ({ page }) => {
    const blog = new BlogPost(page);
    await blog.visitBlogPost();
    //await blog.selectDropDownSingleOption();
    await blog.selectDropDownMultiSelect();

    // for bootstrap https://youtu.be/1jB4PQsBwl8?list=PLUDwpEzHYYLsw33jpra65LIvX1nKWpp7-   just click to expand options, then click the options 
})

test("Auto suggestion drop downs", async ({ page }) => {
    const redbus = new RedBus(page);
    await redbus.open();
    const selected = await redbus.selectFromCity("Delhi");
    console.log("Clicked on Delhi: " + selected);
})