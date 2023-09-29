
exports.ParfumPage = class ParfumPage {
    constructor(page) {
        this.page = page
        
        this.headline = page.locator('h1[]');
    }
}