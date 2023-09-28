import { When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";

When(/^User clicked logout button$/, async () => {
  // Click on User Profile and Log Out button
  await HomePage.logout();
});

Then(/^User is logged out from Salesforce$/, async () => {
  // Login page is displayed
  await expect(await LoginPage.logInBtn).toExist();
});
