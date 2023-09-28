import { Given } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import { titles, userData, subTitles } from "../utilities/data";
import LoginPage from "../pages/login.page";
import HomePage from "../pages/home.page";

Given(/^User is logged in$/, async () => {
  // Open Salesforce site
  await LoginPage.open();

  // Salesforce logi page is opened
  await expect(await LoginPage.getPageTitle()).toEqual(titles.loginPage);

  // Provide username and password and click login button
  await LoginPage.login(userData.username, userData.password);
  // Setup home page is opened
  await expect(HomePage.subTitle).toHaveText(subTitles.setupPage);
  await expect(HomePage.menuTab("Home")).toHaveAttribute(
    "aria-selected",
    "true"
  );
});
