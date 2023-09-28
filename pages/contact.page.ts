import { $ } from "@wdio/globals";

import Page from "./page";
import ContactData from "../utilities/contact.data";

class ContactPage extends Page {
  get newContactTitle() {
    return $("//h2[text()='New Contact']");
  }

  get firstNameInput() {
    return $("//input[@name='firstName']");
  }

  get lastNameInput() {
    return $("//input[@name='lastName']");
  }

  get phoneInput() {
    return $("//input[@name='Phone']");
  }

  get titleInput() {
    return $("//input[@name='Title']");
  }

  get birthdateInput() {
    return $("//input[@name='Birthdate']");
  }

  get emailInput() {
    return $("//input[@name='Email']");
  }

  get saveEditBtn() {
    return $("//button[@name='SaveEdit']");
  }

  contactCardBtn(firstName: string, lastName: string) {
    return $(`//slot//span[text()='${firstName} ${lastName}']`);
  }

  contactCardTitle(firstName: string, lastName: string) {
    return $(`//h1//span[text()='${firstName} ${lastName}']`);
  }

  async saveContact(contact: typeof ContactData) {
    await this.firstNameInput.setValue(contact.firstName);
    await this.lastNameInput.setValue(contact.lastName);
    await this.phoneInput.setValue(contact.phoneNumber);
    await this.titleInput.setValue(contact.title);
    await this.birthdateInput.setValue(contact.birthdate);
    await this.emailInput.setValue(contact.email);
    this.saveEditBtn.click();
  }

  async goToContactCard(firstName: string, lastName: string) {
    this.contactCardBtn(firstName, lastName).click();
  }
}

export default new ContactPage();
