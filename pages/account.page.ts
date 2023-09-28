import { $ } from "@wdio/globals";

import Page from "./page";

class AccountPage extends Page {
  get accountsDropdown() {
    return $("div.triggerLink");
  }

  get selectedOption() {
    return $(".triggerLinkText");
  }

  get editBtn() {
    return $("//button[@name='Edit']");
  }

  get editPageTitle() {
    return $("h2.slds-modal__title");
  }

  get saveEditBtn() {
    return $("//button[@name='SaveEdit']");
  }

  get newContactBtn() {
    return $("//button[@name='NewContact']");
  }

  accountsDropdownOption(option: string) {
    return $(`//div[@class='listContent']//span[text()='${option}']`);
  }

  certainAccountBtn(username: string) {
    return $(`//table//a[@title='${username}']`);
  }

  listOptionBtn(option: string) {
    return $(`//label[text()='${option}']//following::button[1]`);
  }

  listOptionValue(option: string, value: string) {
    return $(`//label[text()='${option}']//following::span[text()='${value}']`);
  }

  inputOption(option: string) {
    return $(`//label[text()='${option}']//following::input[1]`);
  }

  async selectAccountsOption(option: string) {
    await this.accountsDropdown.click();
    await this.accountsDropdownOption(option).click();
  }

  async setListOption(option: string, value: string) {
    await this.listOptionBtn(option).waitForClickable();
    await this.listOptionBtn(option).click();
    await this.listOptionValue(option, value).waitForClickable();
    await this.listOptionValue(option, value).click();
  }

  async setOption(option: string, value: string) {
    await this.inputOption(option).setValue(value);
  }
}

export default new AccountPage();
