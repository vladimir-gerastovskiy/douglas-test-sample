const facetTitleSelector = title => `//div[@class = "facet__title"][contains(text(), "${title}")]`;
const facetContainerSelector = title => `${facetTitleSelector(title)}/parent::div[contains(@class, "facet")]`;
const facetMenuSelector = title => `${facetContainerSelector(title)}//div[@class = "facet__menu"]`;

const facetOptionDivTitleSelector = title => `//div[@class="facet-option__checkbox--rating-stars"]/div[starts-with(text(), "${title}")]`;
const facetOptionTitleSelector = title => `${facetOptionDivTitleSelector(title)}/parent::div`;
const facetOptionCheckboxSelector = title => `${facetOptionTitleSelector(title)}/preceding-sibling::*`;
const facetLinkSelector = title => `${facetOptionTitleSelector(title)}/parent::a`;


exports.FacetComponent = class FacetComponent {
    constructor(page, title) {
        this.page = page;
        this.title = title;

        this.facetContainer = page.locator(facetContainerSelector(title));
        this.facetMenu = page.locator(facetMenuSelector(title));
        this.facetSearchInput = page.locator(`${facetMenuSelector(title)}//div[@class = "facet-search"]`);
    }

    async open() {
        const isOpen = await this.isOpen();

        if (!isOpen) {
            console.log(`Open "${this.title}" facet`);
            await this.facetContainer.click();
        }
        this.facetMenu.waitFor({state: 'visible'});
    }

    async close() {
        const isOpen = await this.isOpen();
        if (isOpen) {
            await this.facetContainer.click();
        }
    }

    async getFacetOptionLink(title) {
        return this.page.locator(facetOptionTitleSelector(title));
    }

    async getFacetOptionCheckbox(title){
        const checkbox = this.page.locator(facetOptionCheckboxSelector(title));
        await checkbox.waitFor({state: 'visible'});
        console.debug(`found element by selector: ${facetOptionCheckboxSelector(title)}`);
        return checkbox;
    }

    async isOpen() {
        const value = await this.facetContainer.getAttribute("class");
        return value.includes('open');
    }

    async isOptionSelected(title) {
        const checkboxClass = await this.page.locator(facetOptionCheckboxSelector(title)).getAttribute('class');
        return checkboxClass.includes('selected');
    }

    async selectOption(title) {
        await this.open();
        const checkbox = this.page.locator(facetOptionCheckboxSelector(title));
        await checkbox.waitFor({state: 'visible'});
        await checkbox.click();
        console.log(`Select option: ${title}`);
    }
}