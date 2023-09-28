import { Given } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import { subTitles, accountOptions, sampleData } from "../utilities/data";
import HomePage from "../pages/home.page";
import SalesPage from "../pages/sales.page";
import AccountPage from "../pages/account.page";

Given(/^Certain Account page is opened$/, async () => {
  // Open Sales app
  await HomePage.goToApp("Sales");
  // Sales home page is opened
  await expect(SalesPage.subTitle).toHaveText(subTitles.salesPage);
  await expect(SalesPage.menuTabActive("Home")).toHaveAttribute(
    "aria-hidden",
    "false"
  );

  // Click on Accounts tab
  await SalesPage.menuTab("Accounts").click();
  // Accounts page is opened
  await expect(SalesPage.menuTabActive("Accounts")).toHaveAttribute(
    "aria-hidden",
    "false"
  );

  // Change list view to All Accounts
  await AccountPage.selectAccountsOption(accountOptions.allAccounts);
  // All Accounts are displayed
  await expect(AccountPage.selectedOption).toHaveText(
    accountOptions.allAccounts
  );

  // Open one of the Accounts
  await AccountPage.certainAccountBtn(sampleData.username).click();
});
