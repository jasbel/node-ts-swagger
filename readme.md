$ npm i express lowdb morgan nanoid swagger-jsdoc swagger-ui-express cors
npm i -D typescript ts-node nodemon @types/cors @types/express @types/lowdb @types/morgan @types/swagger-jsdoc @types/swagger-ui-express

npx tsc --init
npx tsc

npm run build

node build/app.js