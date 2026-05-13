# Notificaciones API - A01801140

API REST para la coleccion NoSQL `notificaciones` (MongoDB + Typegoose + Express + TypeScript).

**Autor:** Moises Falcon - A01801140

## Coleccion

`notificaciones` con atributos:
- `tipo_alerta` (string, requerido)
- `leido` (boolean, default `false`)
- `prioridad` (enum `baja` | `media` | `alta`, default `media`)

## Variables de entorno

Copia `envexample.txt` como `.env` y ajusta:

```
PORT=8080
NODE_ENV=development
DB_NOSQL_NAME=notificaciones_db
DB_NOSQL_USER=admin
DB_NOSQL_PASS=Password1234
DB_NOSQL_HOST=localhost
```

## Scripts

```bash
npm install
npm run build
npm start
# o todo junto
npm run build:start
```

## Endpoints

Base URL local: `http://localhost:8080`

### POST `/notificacion/crearNotificacion`

Body:
```json
{
  "tipo_alerta": "intrusion",
  "leido": false,
  "prioridad": "alta"
}
```

Respuesta `201`:
```json
{ "message": "Registro de notificacion exitoso" }
```

### GET `/notificacion/listarNotificaciones`

Respuesta `200`: arreglo de documentos ordenados por `createdAt` descendente.

## Despliegue (EC2)

```bash
git clone https://github.com/Moises-Falcon/notificaciones-A01801140.git
cd notificaciones-A01801140
npm install
# crear .env con NODE_ENV=production
npm run build
pm2 start "node -r dotenv/config dist/index.js" --name notificaciones
pm2 save
```

Asegurate de abrir el puerto **8080** en el Security Group del EC2.
