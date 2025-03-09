require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const { createHelia } = require('helia');
const { unixfs } = require('@helia/unixfs');
const { CID } = require('multiformats/cid');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

async function initializeHelia() {
  const helia = await createHelia();
  const fs = unixfs(helia);
  return { helia, fs };
}

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { helia, fs } = await initializeHelia();
    const file = req.file;
    const data = await fs.promises.readFile(file.path);
    const cid = await fs.addBytes(data);
    
    // Delete the file after processing
    fs.promises.unlink(file.path);
    
    res.json({ cid: cid.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
