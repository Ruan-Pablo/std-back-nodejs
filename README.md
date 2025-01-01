# Estudo de back-end com NodeJS

## npm

Gerenciador de pacotes: partes de codigo com funcionalidades que pessoas desenvolveram

para iniciar: *npm init*

cria o package.json -> sumario que fica os scritps dos pacotes, quando tem os comandos para executar é ele q é procurado

## express

é um framework para lidar com a parte de servidor com o node (req, res)

Para instalar: 
- npm install express
- yarn add express

o yarn é mais rapido, escalavel, seguro

para instalar(global): 
- npm install -g yarn

É criado a pasta `node modules` q possui varios pacotes, com o express la dentro

## CRUD

Rotas:
- GET: solicita "read" (podes ser requisitado na URL)
- POS: envia "create" ( daqui pra baixo so via ajax)
- PUT: atrualiza
- DELETE: apaga

### insominia

Ferramenta para mandar os gets.. e ver a resposta dos requests

### nodemon
atualiza o servidor sem precisar ficar fechando e reiniciando 

para instalar:
- yarn global add nodemon

e criar um novo script no package.json:
- em scripts
- cria um "start":"nodemon ./index.js" - no arquivo inicial

### morgan
toda vez que alguem acesse ele log com a rota acessada

tipo um retorno do status. (GET / 404)

instalação no package.json:
- yarn add morgan