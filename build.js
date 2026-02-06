const fs = require('fs');
const path = require('path');

const root = __dirname;
const dist = path.join(root, 'dist');

// 复制文件或目录到 dist
function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      copyRecursive(path.join(src, name), path.join(dest, name));
    }
  } else {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

if (fs.existsSync(dist)) fs.rmSync(dist, { recursive: true });
fs.mkdirSync(dist, { recursive: true });

['index.html', 'about.html'].forEach(f => {
  copyRecursive(path.join(root, f), path.join(dist, f));
});
['css', 'js', 'images', 'fonts'].forEach(dir => {
  const src = path.join(root, dir);
  if (fs.existsSync(src)) copyRecursive(src, path.join(dist, dir));
});

console.log('Build done: dist/');
