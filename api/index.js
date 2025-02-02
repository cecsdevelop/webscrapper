const express = require('express');
const puppeteer = require('puppeteer-chromium-resolver'); // Importa el resolver

// ... (resto del código)

app.get('/scrape', async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      args: puppeteer.args, // Usa los argumentos del resolver
      executablePath: await puppeteer.executablePath(), // Usa la ruta del ejecutable del resolver
      headless: puppeteer.headless, // Usa el valor headless del resolver
    });

    // ... (resto del código)

  } catch (error) {
    // ... (manejo de errores)
  }
});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});