## Load Testing

### Metrics
The most valuable metrics are https://web.dev/vitals/#core-web-vitals using in load testing are described https://k6.io/docs/using-k6/metrics/reference/#browser
For example:
* browser_web_vital_lcp - Measures a page's loading performance. Please refer to [Largest Contentful Paint](https://web.dev/lcp/) for more information.
* browser_web_vital_fid - Measures a page's interactivity. Please refer to [First Input Delay](https://web.dev/fid/) for more information.
* browser_web_vital_cls - Measures a page's visual stability. Please refer to [Cumulative Layout Shift](https://web.dev/cls/) for more information.
* browser_web_vital_fcp - Measures the time it takes for the browser to render the first DOM element on the page, whether that's a text, image or header. Please refer to [First Contentful Paint](https://web.dev/fcp/) for more information.

## Run load test
To run the load test in headless mode we can run the following command
```sh
K6_BROWSER_HEADLESS=true k6 run load/scenarios/parfum.load.scenario.js --vus 10 --duration 10m
```

It will execute the load scenario with 10 concurrent virtual users and unlimited number of iteration during 10 min

if there is no k6 installed on the environment it is possible to run the load test using docker
```sh
docker-compose --env-file test.env run --rm k6 run /scripts/scenarios/parfum.load.scenario.js --vus 10 --duration 10m
```