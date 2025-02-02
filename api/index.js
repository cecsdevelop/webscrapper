const express = require('express');
const puppeteer = require('puppeteer-chromium-resolver');

const app = express();
const port = process.env.PORT || 3000;

app.get('/scrape', async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      args: puppeteer.args,
      executablePath: await puppeteer.executablePath(),
      headless: puppeteer.headless,
    });

    const page = await browser.newPage();
    await page.goto('https://www.fisheriessupply.com/');

    // Aquí puedes agregar las funcionalidades que necesites (ej: extraer datos, tomar screenshots, etc.)

    const title = await page.title();

    await browser.close();

    res.json({ title });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
