const express = import('express');
const axios = import('axios'); // Usaremos axios para hacer solicitudes HTTP

const app = express();
app.use(express.json());

// Ruta base
app.get('/', async (req, res) => {
    try {
        // Hacer una solicitud HTTP a la URL deseada
        const response = await axios.get('https://www.fisheriessupply.com/');

        // Verificar si la solicitud fue exitosa
        if (response.status === 200) {
            res.json({ success: true, message: "Solicitud exitosa", data: response.data });
        } else {
            res.status(500).json({ success: false, error: "Error en la solicitud HTTP" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Error en la API" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API corriendo en puerto ${PORT}`));
