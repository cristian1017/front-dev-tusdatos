# Frontend para el API Desarrollada en Python

## Descripción del Proyecto

Este proyecto de frontend está diseñado para interactuar con una API de scraping y mostrar de forma estructurada la información obtenida de los procesos. La vista principal permite a los usuarios ejecutar una petición a la fuente y visualizar los datos resultantes.

## librerias

- React
- axios
- bootstrap
- react-bootstrap
- Sweetalert2

## Instalación

Para instalar el proyecto y sus dependencias, sigue estos pasos:

1. Clona el repositorio:

```
git clone https://github.com/cristian1017/front-dev-tusdatos.git frontend-test-tusdatos
```

2. Ingresa a la carpeta

```
cd frontend-test-tusdatos
```

3. Instala las dependencias del proyecto:

```
npm install
```
### Variables de Entorno
Este proyecto utiliza variables de entorno para la configuración, pero tiene la URL API por defecto, en el puerto `5000`

Puedes crear un archivo .env en la raíz del proyecto y agregar esta variables si el puerto cambia

- `VITE_API_URL_BASE`: URL API con puerto que te brinda la API

## Uso

Para iniciar la aplicación, ejecuta:

```
npm run dev
```

Esto iniciará el servidor de desarrollo en `http://localhost:5173/`, generalmente Vite lo inicializa en `5173`.

## Diseño

## Inicio de Sesión

- Al iniciar la aplicación, se redireccionara directamente hacia el login,
- Se debe ingresar las credenciales que están definidas en la API para autenticarse.
- Se consume el siguiente endpoint de la API, http://localhost:5000/api/login

![alt text](/public/img/login.png)

- Si hay error al iniciar la sesión

![alt text](/public/img/login-error.png)

## Home

### Proceso scraping

- Al ingresar, si no hay información en la API, debera realizar el proceso de extracción de la data.
- Se consume el siguiente endpoint de la API, http://localhost:5000/api/scraper

![alt text](/public/img/home.png)

- Una vez inicializado, creara un prgreso, para verificar cuanto lleva la carga

![alt text](/public/img/scraper-load.png)

## Visualización de la información

Una vez finalizado el proceso de scraping, se renderiza varios tabs, donde cada uno tiene el nombre del ID de prueba en la API

![alt text](/public/img/tabs.png)

- En cada `Tab` se visualizar el type de la extraccion si es `Demandados` ó `Demandantes`
- Al abrir el tipo se desplegara la información recolectada para ese ID en especifico

![alt text](/public/img/table.png)

## Reload Scraping

Si se desea renovar el proceso de scraping, debes eliminar el archivo `data.json` en el proyecto de la `API`, ya que el `Frontend` determina si hay información en dicho archivo. Además, deben `reiniciar` la API.
