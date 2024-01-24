import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.ts';

Given(/^I am on the login page$/, async () => {
    await LoginPage.login();
});

