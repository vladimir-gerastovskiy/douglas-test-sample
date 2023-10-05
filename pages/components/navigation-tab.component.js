import { MarkenPage } from "../marken.page.js";
import { ParfumPage } from "../parfum.page.js";


export class NavigationTab {
    constructor(page) {
        this.page = page;
        
        this.markenTab = page.locator('//a[@type="nav-heading"][text()="MARKEN"]');
        this.parfumTab = page.locator('//a[@type="nav-heading"][text()="PARFUM"]');
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
        await markenPage.headlineWraper.isVisible();
    }

    async navigateToParfumPage() {
        await this.parfumTab.click();
        const parfumPage = new ParfumPage(this.page);
        await expect(parfumPage.headlineWrapper).toContainText('Parfum & Düfte');
    }
}