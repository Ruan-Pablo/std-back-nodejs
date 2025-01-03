# Estudo de back-end com NodeJS

Baseado nessa playlist do Silvio Sampaio: [link](https://www.youtube.com/watch?v=1VpmPJ-dWsE&list=PL_Axpn7FrXHRxxq7fvNwW-Tjx_I8_7Omx&index=1)

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

### body-parser
Tratar o json do body
- Parsear para json
- parsear para urlencoder(outro tipo de envio de formulario)

## mongoDB

Banco de dados baseados em documentos. Basicamente ele guarda documentos *json*
- rápido
- chama de documento mongo
- passível de utilizar js
- possui em clound (pago)

## mongoose

Framework js para trabalhar com mongo DB

para instalar:
- yarn add mongoose

Para armazenar é necessário os modelos que são um **mapeamento da estutura do obj que vai ser guardado**

o mongoose permite criar esses models