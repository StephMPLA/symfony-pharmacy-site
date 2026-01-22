
### Exemple simple :

```bash
#!/bin/bash

echo "Installation outils DEV (Tailwind autocomplete)"

sudo apt update
sudo apt install -y nodejs npm

npm init -y
npm install -D tailwindcss

echo "✔ Node et Tailwind installés (DEV ONLY)"
