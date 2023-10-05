exports.MarkenPage = class MarkenPage {
    constructor(page) {
        this.page = page;

        this.brandPageContainer = this.page.locator('.brand-overview-page');
        this.headlineWraper = this.page.locator('//div[@class="product-overview__headline-wrapper"]');
    }
}