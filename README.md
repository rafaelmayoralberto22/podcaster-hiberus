## Podcaster-Hiberus-Inditex

### Descripción:
Prueba técnica frontend zara.com

### Intalación y puesta en marcha:

Clone este repositorio. Usted necesita `node` and `npm` instalados globalmente en su máquina.  

intalación:

`npm install` o `yarn install` 

Para ejecutar los test:  

`npm test`  o `yarn test`

Para iniciar el servidor de desarrollo:

`npm dev` o `yarn dev`  

Visite:

`http://localhost:3000`

Para crear el build de producción:

`npm build` o `yarn build`  

Nota: el build generado no funcionará sin un servidor web puesto que esta aplicación fue generada usando vite y este trata a `index.html` como código fuente y como parte del grafo de módulos. Durante el desarrollo, Vite es un servidor e `index.html` es el punto de entrada a la aplicación. Una solución es utilizar una herramienta como `serve` para servir tus archivo build de Vite. `serve` es un servidor HTTP estático para archivos estáticos construidos con herramientas como Vite. Puedes instalar `serve` usando el siguiente comando: 

`npm install -g serve`

Luego, ejecuta el siguiente comando en el directorio de tu aplicación:

`serve -s dist`


