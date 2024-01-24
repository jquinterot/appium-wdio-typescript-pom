import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get appOption () {
        return $('~App');
    }

    public get alertDialogButton () {
        return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    }

    public get listDialog () {
        return $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]');
    }
    
    public get dropdownOption () {
        return $('//android.widget.TextView[@text="Command two"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login () {
        await this.appOption.click();
        await this.alertDialogButton.click();
        await this.listDialog.click();
        await this.dropdownOption.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
