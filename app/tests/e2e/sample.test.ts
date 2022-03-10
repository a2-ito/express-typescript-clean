import puppeteer from 'puppeteer';

let browser:puppeteer.Browser;
let page:puppeteer.Page;

describe('Google', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless:true,
      slowMo:18,
    });
    page = await browser.newPage();
    await page.goto('https://google.com');
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
  });

  it('should be titled "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
  });
});

