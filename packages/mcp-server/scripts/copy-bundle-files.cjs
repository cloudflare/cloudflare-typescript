const fs = require('fs');
const path = require('path');
const pkgJson = require('../dist-bundle/package.json');

const distDir = path.resolve(__dirname, '..', 'dist');
const distBundleDir = path.resolve(__dirname, '..', 'dist-bundle');
const distBundlePkgJson = path.join(distBundleDir, 'package.json');

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

async function copyFiles() {
  // copy runtime files
  for await (const file of walk(distDir)) {
    if (!/[cm]?js$/.test(file)) continue;
    const dest = path.join(distBundleDir, path.relative(distDir, file));
    await fs.promises.mkdir(path.dirname(dest), { recursive: true });
    await fs.promises.copyFile(file, dest);
  }

  // replace package.json reference with local reference
  for (const dep in pkgJson.dependencies) {
    if (dep === 'cloudflare') {
      pkgJson.dependencies[dep] = 'file:../../../dist/';
    }
  }

  await fs.promises.writeFile(distBundlePkgJson, JSON.stringify(pkgJson, null, 2));
}

copyFiles();
