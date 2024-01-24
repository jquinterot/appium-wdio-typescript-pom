import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import MainPage from "../../pages/Main.page.ts";
import AppPage from "../../pages/app.page.ts";
import AlertDialogPage from "../../pages/AlertDialog.page.ts";

Given(/^user selects App demo$/, async () => {
  await MainPage.selectApp();
});

When(/^selects Alert Dialogs$/, async () => {
  await AppPage.selectAlertDialog();
});

When(/^selects List Dialog$/, async () => {
  await AlertDialogPage.selectListDIalog();
});

When(/^selects Command two$/, async () => {
  await AlertDialogPage.selectDropDownOption();
});

Then(/^alert two confirmation message should be displayed$/, async () => {
  await expect(await AlertDialogPage.selectedCommand).toHaveText(
    "You selected: 1 , Command two"
  );
});
