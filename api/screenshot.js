const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://www.fisheriessupply.com/');

    // Hacer clic en el botón para mostrar el formulario de login
    await page.waitForSelector('li.nav-item--use > a');
    await page.click('li.nav-item--use > a');

    // Esperar a que aparezca el input de email
    await page.waitForSelector('input#email');
    await page.type('input#email', 'contreras.camilo@gmail.com');
    await page.click('button.fs-button-standard');

    // Esperar a que aparezca el input de password
    await page.waitForSelector('input#login-password');
    await page.type('input#login-password', 'Zxcv-2020++()');
    await page.click('button.fs-button-standard');

    // Esperar la navegación o verificación de que el login fue exitoso
    await page.waitForNavigation();
    console.log('Login exitoso');

    // Cierra el navegador después de la prueba
    await browser.close();
})();