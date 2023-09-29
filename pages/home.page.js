const { NavigationTab } = require("./components/navigation-tab.component");

exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.navBar = new NavigationTab(page);
    }

    async open() {
        await this.page.goto('/');        
    }
}