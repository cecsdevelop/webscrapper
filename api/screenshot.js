const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
app.use(express.json());

app.get('/login', async (req, res) => {
    try {
        const browser = await puppeteer.launch({ headless: true });
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

        await browser.close();
        res.json({ message: "Login exitoso" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en la automatización" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API corriendo en puerto ${PORT}`));
