import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';
import { browser } from 'k6/experimental/browser';
import { SharedArray } from 'k6/data';
import { HomePage } from '../../pages/home.page.js';
import { ParfumPage } from '../../pages/parfum.page.js';
import { FacetComponent } from '../../pages/components/facet.component.js';

const baseUrl = __ENV.BASE_URL || 'https://douglas.de';

const getRandomDataItem = data => data[Math.floor(Math.random() * data.length)];

export const options = {
  scenarios: {
    ui: {
      executor: 'constant-vus',
      duration: '10m',
      vus: 1,
      options: {
        browser: {
          type: 'chromium',
        }
      }
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.01'],
    browser_web_vital_lcp: ['p(90) < 2500'],  // Largest Contentful Paint
    browser_web_vital_fid: ['p(90) < 100'],   // First Input Delay
    browser_web_vital_cls: ['p(90) < 0.1'],   // Cumulative Layout Shift
    browser_web_vital_fcp: ['p(90) < 1800'],  // First Contentful Paint
    checks: ["rate==1.0"]
  }
}

const openHomePage = async (page) => {
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  const homePage = new HomePage(page);

  homePage.consentsDialog.modalDialogContainer.waitFor();
  await homePage.consentsDialog.acceptAllBtn.click();
}

const parfumPageNavigation = async (page) => {
  const parfumPage = new ParfumPage(page);

  await parfumPage.navBar.parfumTab.click();

  describe('parfum page should be loaded', () => {
    const textContent = parfumPage.headlineWrapper.textContent();
    expect(textContent).to.contain('Parfum');
  });

  return parfumPage;
}

const data = new SharedArray('filter data', function() {
  return JSON.parse(open('../data/data.json'))
});


export default async function () {
  const filtersData = getRandomDataItem(data).filter;

  const context = browser.newContext({
    viewport: {
      width: 1920,
      height: 1080,
    },
  });

    const page = context.newPage();

    try {

      await openHomePage(page);
      await parfumPageNavigation(page);

      for (const filter in filtersData) {
        if (filtersData.hasOwnProperty(filter)){
          const facet = new FacetComponent(page, filter);
          await facet.selectOption(filtersData[filter]);
          sleep(1); // sleep 1 sec
        }
      }

    } finally {
       page.close();
    }
}