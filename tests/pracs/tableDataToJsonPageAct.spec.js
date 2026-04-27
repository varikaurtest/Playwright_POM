import { test } from "@playwright/test";
import BlogPost from "../../PageObjects/PageAction/blogpost";
import fs from "fs";

test("Automation of table", async ({ page }) => {
    const blogpostObj = new BlogPost(page);
    await blogpostObj.visitBlogPost();
    const tableData = await blogpostObj.getAllTableDataAcrossPages();
    console.log("Table Data is: " + JSON.stringify(tableData));
    fs.writeFileSync("TableData.json", JSON.stringify(tableData, null, 2));
})//end test