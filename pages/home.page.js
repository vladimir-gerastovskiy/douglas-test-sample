import { ConsentModalDialog } from "./components/consent-dialog.component.js";
import { NavigationTab } from "./components/navigation-tab.component.js";

export class HomePage {
    constructor(page) {
        this.page = page;
        this.navBar = new NavigationTab(page);
        this.consentsDialog = new ConsentModalDialog(page);
    }

    async open() {
        await this.page.goto('/', { waitUntil: 'networkidle' });
    }
}