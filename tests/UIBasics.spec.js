const {test} = require ('@playwright/test');

test ('First Playwright test', async ({browser,page})=>
{
//playwright code
//const context = await browser.newContext();
//const page = await context.newPage();
await page.goto("https://www.cnn.com/");
});


//
//test.only ('Google page open',async ({page})=>
//{
//await page.goto("https://www.google.com/");
//});