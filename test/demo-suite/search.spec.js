const puppeteer         = require('puppeteer');
const puppeteerConfig   = require('../../configs/puppeteer.config');
const appConfig         = require('../../configs/app.config');
const expect            = require('chai').expect;

describe('User searches something on Google', function () {
    let browser, page;
    let searchInputElementHandle;

    before(async function () {
        browser = await puppeteer.launch(puppeteerConfig.launchOptions);
        page = await browser.newPage();
    });

    it('Navigate to the Google page', async function () {
        await page.goto(appConfig.baseUrl, { waitUntil: 'networkidle0' })
    });

    it('Input search criteria', async function () {
        searchInputElementHandle = await page.waitForSelector('input[name=q]', { visible: true });
        await searchInputElementHandle.type('test123', { delay: 10 });
    });

    it('Hit Enter key', async function () {
        await searchInputElementHandle.press('Enter');
    });

    it('should fails', function () {
        expect(true).to.be.false;
    });

    after(async function () {
        await browser.close();
    });
});
