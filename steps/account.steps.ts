import { When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import { accountOptions, sampleData } from "../utilities/data";
import AccountPage from "../pages/account.page";

When(/^Account edit page is opened$/, async () => {
  // Click edit button
  await AccountPage.editBtn.click();
  // Edit page is opened
  await expect(AccountPage.editPageTitle).toExist();
});

When(/^User provided new values for necessary fields$/, async () => {
  // Provide new value for picklist field
  await AccountPage.setListOption("Industry", sampleData.industry);
  // Provide new value for text field
  await AccountPage.setOption("Phone", sampleData.phone);
  // Click save button
  await AccountPage.saveEditBtn.click();
});

Then(/^Success message that Account was saved is displayed$/, async () => {
  await expect(AccountPage.successAlert).toExist();
});

Then(/^New values are displayed for changed fields$/, async () => {
  // Click on Details tab on Account
  await AccountPage.switchTab(accountOptions.details);
  // Details tab is opened
  await expect(
    AccountPage.userMenuNavActive(accountOptions.details)
  ).toHaveAttributeContaining("class", "slds-is-active");

  // New values are displayed for changed fields
  await expect(AccountPage.getTextDetails("Industry")).toHaveText(
    sampleData.industry
  );
  await expect(AccountPage.getLinkDetails("Phone")).toHaveText(
    sampleData.phone
  );
});
