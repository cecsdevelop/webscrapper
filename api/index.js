const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || 3000;

app.get('/scrape', async (req, res) => {
  try {
    // Iniciar Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navegar al sitio web
    await page.goto('https://www.fisheriessupply.com/');

    // Aquí irán las funcionalidades adicionales que necesites (ej: extraer datos, tomar screenshots, etc.)

    // Ejemplo: Obtener el título de la página
    const title = await page.title();

    // Cerrar Puppeteer
    await browser.close();

    // Enviar la respuesta
    res.json({ title }); // Enviamos el título como ejemplo

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});