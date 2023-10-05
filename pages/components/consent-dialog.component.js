
exports.ConsentModalDialog  = class ConsentModalDialog {
    constructor(page) {
        this.page = page;

        this.modalDialogContainer = page.locator('div[role="dialog"]');
        this.acceptAllBtn = page.locator('//button[contains(@class, "accept-all")]');
        this.moreInfoBtn = page.locator('.button.button__secondary uc-list-button__more-information');
        this.denyAllBtn = page.locator('.button.button__secondary uc-list-button__deny-all');
    }

    async acceptAll() {
        this.acceptAllBtn.click();
    }
}