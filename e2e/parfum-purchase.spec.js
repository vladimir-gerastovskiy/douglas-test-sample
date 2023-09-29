const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home.page');

test('Parfum page is opened', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.navBar.navigateToMarkenPage();
    // await homePage.navBar.markenTab.click();
    // await homePage.navBar.parfumTab.click();
    // await homePage.navBar.makeUpTab.click();
    // await homePage.navBar.gesichtTab.click();
    // await homePage.navBar.kopperTab.click();
    // await homePage.navBar.haareTab.click();
    // await homePage.navBar.appothekeTab.click();
    // await homePage.navBar.douglasCollectionTab.click();
    // await homePage.navBar.homeLifestyleTab.click();
});