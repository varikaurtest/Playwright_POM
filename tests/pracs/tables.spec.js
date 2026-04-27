import { test } from "@playwright/test";
import BlogPost from "../../PageObjects/PageAction/blogpost";

test("Automation of table", async ({ page }) => {
    const blogpostObj = new BlogPost(page);
    await blogpostObj.visitBlogPost();

    const totalRows = await blogpostObj.getTableRowCount();
    console.log("Total number of rows in the table are: " + totalRows);

    const totalPages = await blogpostObj.getTablePagesCount();
    console.log("Total number of pages are: " + totalPages);

    const tableData = await blogpostObj.getAllTableDataAcrossPages();
    console.log("Printing all the rows of the table across all the pages:");
    tableData.forEach((row, index) => {
        console.log(`Row ${index + 1}: Product: ${row.product}, Price: ${row.price}`);
    });
})