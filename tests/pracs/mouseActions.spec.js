import { expect, test } from "@playwright/test";
import { createDemoQa } from "../../PageObjects/PageAction/demoqa";
import BlogPost from "../../PageObjects/PageAction/blogpost";

test("Mouse actions", async ({ page }) => {
  const blogpostObj = new BlogPost(page);
  await blogpostObj.visitBlogPost();
  await blogpostObj.mouseActions();

})