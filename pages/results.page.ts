import { $ } from "@wdio/globals";

import Page from "./page";

class ResultsPage extends Page {
  resultEmail(email: string) {
    return $(
      `//div[contains(@class,'listViewContent')]//a[@data-aura-class='emailuiFormattedEmail' and text()='${email}']`
    );
  }
}

export default new ResultsPage();
