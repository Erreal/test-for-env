import express from "express";
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const PORT = process.env.PORT || 8500;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});