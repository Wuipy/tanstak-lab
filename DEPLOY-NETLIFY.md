# Deploy Frontend a Netlify (vía GitHub Actions)

API Backend: **https://lab5progra4.runasp.net**

---

## Paso 1: Crear sitio en Netlify

1. Entra a [https://app.netlify.com](https://app.netlify.com)
2. **Add new site** → puedes vincular el repo después; por ahora crea un sitio vacío o importa el repo sin activar build (usaremos GitHub Actions).
3. Anota el **Site ID**: Site configuration → General → **Site ID** (ej. `a1b2c3d4-e5f6-...`).

---

## Paso 2: Token de Netlify

1. User settings → **Applications** → **Personal access tokens**
2. **New access token** → copia el token (solo se muestra una vez).

---

## Paso 3: Secrets en GitHub

En tu repo del Frontend → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:

| Secret | Valor |
|--------|--------|
| `NETLIFY_AUTH_TOKEN` | Token del paso 2 |
| `NETLIFY_SITE_ID` | Site ID del paso 1 |

---

## Paso 4: Push a GitHub

Sube el código con:

- `netlify.toml`
- `.github/workflows/deploy-netlify.yml`

Cada push a `main` o `master` ejecuta el workflow **Deploy Frontend to Netlify**.

También puedes lanzarlo manualmente: **Actions** → **Deploy Frontend to Netlify** → **Run workflow**.

---

## Paso 5: URL del sitio

En Netlify verás la URL, por ejemplo:

```
https://tu-sitio.netlify.app
```

---

## Paso 6: CORS en el Backend

Redeploy del Backend C# con el cambio que permite `*.netlify.app`, o agrega tu URL exacta en `appsettings.json`:

```json
"Cors": {
  "AllowedOrigins": [
    "https://lab5progra4.runasp.net",
    "https://tu-sitio.netlify.app"
  ]
}
```

---

## Probar

1. Abre `https://tu-sitio.netlify.app/login`
2. Login: `admin` / `1234`
3. Debe conectar con la API en producción.

---

## Desarrollo local

```bash
npm run dev
```

Usa Backend local (`http://localhost:5219`) vía `.env.development`.
