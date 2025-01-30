import express from 'express';
import puppeteer from 'puppeteer';

const app = express();
const port = process.env.PORT || 3000;

app.get('/screenshot', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://www.google.com'); // Abre Google
    
    const screenshot = await page.screenshot(); // Captura la pantalla
    await browser.close();

    res.setHeader('Content-Type', 'image/png');
    res.send(screenshot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al tomar la captura' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
