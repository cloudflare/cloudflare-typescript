const fs = require('fs');
const pkgJson = require('../dist/package.json');
const parentPkgJson = require('../../../package.json');

for (const dep in pkgJson.dependencies) {
  // ensure we point to NPM instead of a local directory
  if (dep === 'cloudflare') {
    pkgJson.dependencies[dep] = '^' + parentPkgJson.version;
  }
}

fs.writeFileSync('dist/package.json', JSON.stringify(pkgJson, null, 2));
