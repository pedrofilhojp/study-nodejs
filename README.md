# study-nodejs

## Extensions of VSCode
- Hack the box (theme for VSCode)
- Simbols (Theme for icons of VSCode)
- Glassit-vsc (Theme for get transparence of VSCode) - Ctrl+Alt+z, Ctrl+Alt+x, Ctrl+Alt+c
- Thunder Client (Test API)

## NodeJS
- NPM: Manager packages/Dependences your project of NodeJS
- Package.json: The main file of you node project
To create this file, execute: npm init
- index.js: Common name for first file of yout node project

### Iniitalize new node project
npm init
Create file "src/index.js"
- Execucao automatica do node em ambiente de execução
node --watch src/index.js

### How to call main() function
- Option 01: main() function

```js
async function main(){
    console.log("ola");
}
main();
```

- Option 02: Auto-invoque funtion:

```js
(async function main(){
    console.log("ola");
})()
```