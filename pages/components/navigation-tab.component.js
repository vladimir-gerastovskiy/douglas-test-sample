const { MarkenPage } = require("../marken.page");


exports.NavigationTab = class NavigationTab {
    constructor(page) {
        this.page = page;

        this.markenTab = page.locator('[type="nav-heading"]', { hasText: "MARKEN" });
        this.parfumTab = page.locator('[type="nav-heading"]', { hasText: "PARFUM" });
        this.makeUpTab = page.locator('[type="nav-heading"]', { hasText: "MAKE-UP" });
        this.gesichtTab = page.locator('[type="nav-heading"]', { hasText: "GESICHT" });
        this.kopperTab = page.locator('[type="nav-heading"]', { hasText: "KÖRPER" });
        this.haareTab = page.locator('[type="nav-heading"]', { hasText: "HAARE" });
        this.appothekeTab = page.locator('[type="nav-heading"]', { hasText: "Apotheke¹ & Gesundheit" });
        this.douglasCollectionTab = page.locator('[type="nav-heading"]', { hasText: "DOUGLAS COLLECTION" });
        this.homeLifestyleTab = page.locator('[type="nav-heading"]', { hasText: "HOME & LIFESTYLE" });
        this.salTab = page.locator('[type="nav-heading"]', { hasText: "SALE" });
        this.nachhaltigkeitTab = page.locator('[type="nav-heading"]', { hasText: "Nachhaltigkeit" });
        this.herbstTab = page.locator('[type="nav-heading"]', { hasText: "HERBST" });
        this.luxusTab = page.locator('[type="nav-heading"]', { hasText: "LUXUS" });
        this.neuTab = page.locator('[type="nav-heading"]', { hasText: "NEU" });
    }

    async navigateToMarkenPage() {
        await this.markenTab.click();
        const markenPage = new MarkenPage(this.page);
        await markenPage.brandPageContainer.isVisible();
    }
}