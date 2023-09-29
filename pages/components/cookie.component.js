
exports.CookieModal = class CookieModal {
    constructor(page) {
        this.page = page;

        this.modalDialogContainer = page.locator('div[role="dialog"]');
        this.acceptAllBtn = page.locator('.button.button__primary.uc-list-button__accept-all');
        this.moreInfoBtn = page.locator('.button.button__secondary uc-list-button__more-information');
        this.denyAllBtn = page.locator('.button.button__secondary uc-list-button__deny-all');
    }
}