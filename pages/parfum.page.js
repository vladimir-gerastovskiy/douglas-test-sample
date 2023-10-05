import { FacetComponent } from "./components/facet.component.js";
import { NavigationTab } from "./components/navigation-tab.component.js";


export class ParfumPage {
    constructor(page) {
        this.page = page
        this.navBar = new NavigationTab(page);

        this.headlineWrapper = page.locator('//div[@class="product-overview__headline-wrapper"]');

        this.facetListContainer = page.locator('//div[@data-testid="row"][contains(@class, "facet-list")]');
        this.produktartFacet = new FacetComponent(page, 'Produktart');
        this.markeFacet = new FacetComponent(page, 'Marke');
        this.furWenFacet = new FacetComponent(page, 'Für Wen');
        this.geschenkFurFacet = new FacetComponent(page, 'Geschenk für');
        this.highlightsFacet = new FacetComponent(page, 'Highlights');
    }

    async getProductNumber() {
        await this.headlineWrapper.waitFor({state: 'visible'});
        const headlineText = await this.headlineWrapper.textContent();
        const number = headlineText.match(/(\d+(\.\d+)?)/)[0];
        return parseFloat(number);
    }

    async isOpened() {
        await this.headlineWrapper.waitFor({state: 'visible'});
    }
}