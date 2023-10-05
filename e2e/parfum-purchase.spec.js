import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { ParfumPage } from '../pages/parfum.page';
import { FacetComponent } from '../pages/components/facet.component';

[
    {
        "testName": "Sale products",
        "filter": {
            "Highlights": ["Sale"],
            "Produktart": ["Parfum"],
            "Marke": ["Armani"],
            "Für Wen": ["Weiblich"]
        },
        "expectedProductNumber": 4,
    },
    {
        "testName": "NEU products",
        "filter": {
            "Highlights": ["NEU"],
            "Produktart": ["Parfum"],
            "Für Wen": ["Unisex"]
        },
        "expectedProductNumber": 584,
    },
    {
        "testName": "Limitiert products",
        "filter": {
            "Highlights": ["Limitiert"],
            "Produktart": ["Duftset"],
            "Marke": ["Armani"],
            "Geschenk für": ["Weihnachten"],
            "Für Wen": ["Weiblich"]
        },
        "expectedProductNumber": 4,
    }
].forEach(testData =>
    test(`Test ${testData.testName}`, async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();

        await homePage.consentsDialog.acceptAllBtn.click();

        await homePage.navBar.parfumTab.click();
        const parfumPage = new ParfumPage(page);
        await parfumPage.isOpened();

        for (const facetTitle in testData.filter) {
            if (testData.filter.hasOwnProperty(facetTitle)) {
                const facet = new FacetComponent(page, facetTitle);
                await facet.selectOption(testData.filter[facetTitle]);
            }
        }

        const productsNumber = await parfumPage.getProductNumber();
        console.log(await parfumPage.getProductNumber());
        expect(productsNumber).toBe(testData.expectedProductNumber);
    })
);