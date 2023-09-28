import { $ } from "@wdio/globals";
import { browser } from "@wdio/globals";
import { Key } from "webdriverio";

export default class Page {
  get subTitle() {
    return $(".appName span");
  }

  get appLauncher() {
    return $(".appLauncher");
  }

  get searchAppInput() {
    return $("//input[@placeholder='Search apps and items...']");
  }

  get successAlert() {
    return $("div[aria-label='Success']");
  }

  get closeAlert() {
    return $("//button[@title='Close']");
  }

  get globalSearchBtn() {
    return $("//button[@aria-label='Search']");
  }

  get globalSearchInput() {
    return $("//input[@placeholder='Search...']");
  }

  get profileBtn() {
    return $(
      "//div[contains(@class,'profileTrigger')]//span[@class='uiImage']"
    );
  }

  get logOutBtn() {
    return $("//a[normalize-space()='Log Out']");
  }

  menuTab(option: string) {
    return $(`//a[@title='${option}']`);
  }

  menuTabActive(option: string) {
    return $(`//a[@title='${option}']/parent::*`);
  }

  appBtn(appName: string) {
    return $(
      `//div[@class='al-menu-dropdown-list']//a[@data-label='${appName}']`
    );
  }

  userMenuNav(option: string) {
    return $(
      `//div[@class='windowViewMode-normal oneContent active lafPageHost']//a[text()='${option}']`
    );
  }

  userMenuNavActive(option: string) {
    return $(
      `//div[@class='windowViewMode-normal oneContent active lafPageHost']//a[text()='${option}']//parent::*`
    );
  }

  getTextDetails(option: string) {
    return $(
      `//div[@class='slds-form']//span[text()='${option}']//following::span[1]`
    );
  }

  getLinkDetails(option: string) {
    return $(
      `//div[@class='slds-form']//span[text()='${option}']//following::a[1]`
    );
  }

  async goToApp(appName: string) {
    await this.appLauncher.click();
    await this.searchAppInput.setValue(appName);
    await this.appBtn(appName).click();
  }

  async open() {
    await browser.url(process.env.URL);
    await browser.maximizeWindow();
  }

  async getPageTitle() {
    return await browser.getTitle();
  }

  async switchTab(tabName: string) {
    await this.userMenuNav(tabName).waitForClickable();
    await this.userMenuNav(tabName).click();
  }

  async globalSearch(value: string) {
    await this.globalSearchBtn.click();
    await this.globalSearchInput.clearValue();
    await this.globalSearchInput.setValue(value);
    await browser.keys(Key.Enter);
  }

  async logout() {
    await this.profileBtn.click();
    await this.logOutBtn.click();
  }
}
