const express = require('express');
const puppeteer = require('puppeteer');
const app = express();

app.use(express.json()); // Para analizar el cuerpo de las solicitudes JSON

app.post('/screenshot', async (req, res) => {
  try {
    const url = req.body.url; // Obtiene la URL de la solicitud
    
    // Validación básica de la URL
    if (!url) {
      return res.status(400).json({ error: 'Falta la URL' });
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const screenshotBuffer = await page.screenshot();
    await browser.close();

    // Aquí podrías guardar la captura en un almacenamiento en la nube
    // y devolver la URL de la imagen en la respuesta

    res.status(200).send(screenshotBuffer); // Envía la captura como respuesta
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al generar la captura de pantalla' });
  }
});

const port = process.env.PORT || 3000; // Usa el puerto definido por Vercel o el 3000
app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});
//commet para redeploy