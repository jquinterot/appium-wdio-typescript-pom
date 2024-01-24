import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
  /**
   * define selectors using getter methods
   */
  public get appOption() {
    return $("~App");
  }

  public async selectApp() {
    await this.appOption.click();
  }
}

export default new MainPage();
