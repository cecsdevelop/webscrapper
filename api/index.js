import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser', // Usa Chromium en Render
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true
});

const page = await browser.newPage();
await page.goto('https://example.com');
await page.waitForTimeout(5000);
await browser.close();
