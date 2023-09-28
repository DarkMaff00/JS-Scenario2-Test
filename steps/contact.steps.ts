import { When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import ContactData from "../utilities/contact.data";
import AccountPage from "../pages/account.page";
import ContactPage from "../pages/contact.page";
import { accountOptions } from "../utilities/data";
import ResultsPage from "../pages/results.page";

When(/^Contact creation page is opened$/, async () => {
  // Click new contact button
  await AccountPage.newContactBtn.click();
  // Contact cretion page is opened
  await expect(ContactPage.newContactTitle).toExist();
});

When(
  /^User provided values for all fields under Contact Information Section$/,
  async () => {
    // Create Contact
    await ContactPage.saveContact(ContactData);
  }
);

Then(/^Success message that Contact was created is displayed$/, async () => {
  await expect(ContactPage.successAlert).toExist();
  await ContactPage.closeAlert.click();
});

Then(/^Values for created Contact are displayed$/, async () => {
  // Click on Contact name in the related list
  ContactPage.goToContactCard(ContactData.firstName, ContactData.lastName);
  // Contact page is opened
  await expect(ContactPage.menuTabActive("Contacts")).toHaveAttribute(
    "aria-hidden",
    "false"
  );
  await expect(
    ContactPage.contactCardTitle(ContactData.firstName, ContactData.lastName)
  ).toExist();

  // Click on Details tab on Contact
  await ContactPage.switchTab(accountOptions.details);
  // Details tab is opened
  await expect(
    ContactPage.userMenuNavActive(accountOptions.details)
  ).toHaveAttributeContaining("class", "slds-is-active");

  // Values for created contact are displayed.
  await expect(ContactPage.getTextDetails("Name")).toHaveText(
    `${ContactData.firstName} ${ContactData.lastName}`
  );
  await expect(ContactPage.getTextDetails("Title")).toHaveText(
    ContactData.title
  );
  await expect(ContactPage.getTextDetails("Birthdate")).toHaveText(
    ContactData.birthdate
  );
  await expect(ContactPage.getLinkDetails("Phone")).toHaveText(
    ContactData.phoneNumber
  );
  await expect(ContactPage.getLinkDetails("Email")).toHaveText(
    ContactData.email
  );
});

Then(/^New contact is listed in global search results$/, async () => {
  // In Global Search provide name of the created contact
  await ContactPage.globalSearch(ContactData.email);
  // Created contact is displayed in the search results
  await expect(ResultsPage.resultEmail(ContactData.email)).toExist();
});
