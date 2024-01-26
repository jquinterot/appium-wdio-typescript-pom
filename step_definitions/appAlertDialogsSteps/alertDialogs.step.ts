import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import { MainPage, AlertDialog, AppPage } from "../../pages";

const mainPage = new MainPage;
const alertDialog = new AlertDialog;
const appPage = new AppPage;

Given(/^user selects App demo$/, async () => {
  await mainPage.selectApp();
});

When(/^selects Alert Dialogs$/, async () => {
  await appPage.selectAlertDialog();
});

When(/^selects List Dialog$/, async () => {
  await alertDialog.selectListDIalog();
});

When(/^selects Command two$/, async () => {
  await alertDialog.selectDropDownOption();
});

Then(/^alert two confirmation message should be displayed$/, async () => {
  await expect(await alertDialog.selectedCommand).toHaveText(
    "You selected: 1 , Command two"
  );
});
