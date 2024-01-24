import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AlertDialog extends Page {
  /**
   * define selectors using getter methods
   */

  public get listDialog() {
    return $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    );
  }

  public get dropdownOption() {
    return $('//android.widget.TextView[@text="Command two"]');
  }

  public get selectedCommand() {
    return $("//android.widget.TextView");
  }

  public async selectListDIalog() {
    await this.listDialog.click();
  }

  public async selectDropDownOption() {
    await this.dropdownOption.click();
  }
}

export default new AlertDialog();
