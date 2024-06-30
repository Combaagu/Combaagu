1. instalar typescript y tipos de Node, como dependencia de desarrollo
npm i -D typescript @types/node //paquete de desarrollo, no de produccion

2. inicializar el archivo de config de tyscript (se puede configurar al gusto)
 npx tsc --init --outDir dist/ --rootDir src

3. opcional - para tanspilar el codigo, se puede usar este comando
 npx nodemon dist/app.js

4. configurar Nodemon y node-TS
 npm i -D ts-node  nodemon //paquete de desarrollo, no de produccion

5. crear archivo de configuracion de nodemon - nodemmon.json

{
    "watch": ["src"],
    "ext": ".ts,.js",
    "ignore": [],
    "exec": "npx ts-node ./src/app.ts"

}

6. instalar rimraf (Herramienta que funciona similar al rm -f), eliminar directorio
 npm i -D rimraf //paquete de desarrollo, no de produccion

7. Package.json / scripts
 crear script para correr el desarrollo en el package.json

  ---------
  
  "test": "echo \"Error: no test specified\" && exit 1", -- testeo

    "dev": "nodemon",   -- desarrollo 

    "build": "rimraf ./dist && tsc", -- construccion  
    npm run build: elimina los paquetes que existan demas en la carpeta ./dist

    "start": "npm run build && node dist/app.js" -- Produccion
    npm start: Ejecuta Build, y luego node

  ----------------

cambio en tsconfig.json

  "target": "ESNext",    
