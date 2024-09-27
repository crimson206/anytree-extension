const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

async function copyExtra() {
  const distPath = path.join(__dirname, '..', 'dist');

  const filesToCopy = ['README.md', 'LICENSE', 'package.json'];
  for (const file of filesToCopy) {
    await fs.copy(
      path.join(__dirname, '..', file),
      path.join(distPath, file)
    );
  }

  console.log('Dist folder prepared successfully');
}

copyExtra().catch(console.error);
