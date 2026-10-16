import express from 'express';
import path from 'path';
import fs from 'fs';
import JSZip from 'jszip';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

// API route: generates and serves the complete project as a real ZIP file
app.get('/api/download-zip', async (_req, res) => {
  try {
    const zip = new JSZip();
    const EXCLUDE_NAMES = ['node_modules', '.git', '.aistudio', 'dist', 'package-lock.json'];

    function addDirectory(currentDir: string, zipRef: JSZip) {
      const items = fs.readdirSync(currentDir, { withFileTypes: true });

      for (const item of items) {
        if (EXCLUDE_NAMES.includes(item.name)) continue;

        const fullPath = path.join(currentDir, item.name);
        if (item.isDirectory()) {
          const nextFolder = zipRef.folder(item.name);
          if (nextFolder) {
            addDirectory(fullPath, nextFolder);
          }
        } else if (item.isFile()) {
          const fileData = fs.readFileSync(fullPath);
          zipRef.file(item.name, fileData);
        }
      }
    }

    addDirectory(rootDir, zip);

    const zipBuffer = await zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: { level: 9 },
    });

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="jiyansh-abc-birthday-adventure.zip"');
    res.setHeader('Content-Length', zipBuffer.length.toString());
    res.setHeader('Cache-Control', 'no-cache');
    res.send(zipBuffer);
  } catch (error) {
    console.error('Error generating project ZIP:', error);
    res.status(500).json({ error: 'Failed to generate ZIP archive' });
  }
});

// Vite middleware in dev mode
if (process.env.NODE_ENV !== 'production') {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  const distDir = path.join(__dirname, 'dist');
  app.use(express.static(distDir));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at http://0.0.0.0:${port}`);
});
