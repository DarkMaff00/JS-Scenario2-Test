import { $ } from "@wdio/globals";
import Page from "./page";
class LoginPage extends Page {
  get usernameInput() {
    return $("#username");
  }

  get passwordInput() {
    return $("#password");
  }

  get logInBtn() {
    return $("#Login");
  }

  async login(username: string, password: string) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.logInBtn.click();
  }
}

export default new LoginPage();
