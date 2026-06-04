# Deploy del Frontend (React + Vite)

API en producción: **https://lab5progra4.runasp.net**

---

## Opción 1: GitHub Pages (recomendado)

### 1. Activar Pages en GitHub

1. Repo → **Settings** → **Pages**
2. **Build and deployment** → Source: **GitHub Actions**

### 2. Subir el código y ejecutar el workflow

Cada push a `main` o `master` ejecuta `.github/workflows/deploy-frontend.yml`.

La URL quedará así:

```
https://<tu-usuario>.github.io/<nombre-del-repo>/
```

Ejemplo: `https://juanperez.github.io/tanstak-lab/`

### 3. CORS en el Backend

Tras conocer la URL de Pages, agrega el origen en `HackerRank1/appsettings.json`:

```json
"Cors": {
  "AllowedOrigins": [
    "https://lab5progra4.runasp.net",
    "https://TU-USUARIO.github.io"
  ]
}
```

O redeploy del Backend (ya acepta cualquier `*.github.io` si aplicaste el cambio en `Program.cs`).

### 4. Probar

- Abre la URL de GitHub Pages
- Login: `admin` / `1234`
- Debe llamar a `https://lab5progra4.runasp.net/login`

---

## Opción 2: MonsterASP (sitio estático)

Si tienes **otro sitio** en MonsterASP solo para el Frontend:

1. En la raíz del proyecto:
   ```bash
   npm run build
   ```
2. Edita `scripts/deploy-monsterasp.bat` con tus datos Web Deploy.
3. Ejecuta el `.bat` (requiere Web Deploy instalado en Windows).
4. Agrega la URL del sitio frontend en `Cors:AllowedOrigins` del Backend y redeploy.

---

## Desarrollo local

```bash
npm run dev
```

Usa `http://localhost:5219` (`.env.development`). Backend local debe estar corriendo.

---

## Variables de entorno

| Archivo | Uso |
|---------|-----|
| `.env.development` | API local en `npm run dev` |
| `.env.production` | API producción en `npm run build` |
