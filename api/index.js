import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome-stable',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
});

const page = await browser.newPage();
await page.goto('https://intelindev.com');
await page.waitForTimeout(5000);
await browser.close();
