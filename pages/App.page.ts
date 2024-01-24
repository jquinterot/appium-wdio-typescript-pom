import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AppPage extends Page {
  /**
   * define selectors using getter methods
   */

  public get alertDialogButton() {
    return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
  }

  public async selectAlertDialog() {
    await this.alertDialogButton.click();
  }
}

export default new AppPage();
