# Inicializando uma Aplicação Node

comando: npm init
npm init //inicialize sua aplicação Node

Você vai ver que nosso arquivo package.json foi criado e contém
main (entry point) para apontar para o nosso index.js:
...
"main": "index.js",
...

# Criando uma Simples Aplicação Node

Agora vamos criar o nosso arquivo index.js e tudo que precisamos é do comando console.log() para imprimir alguma informação na saída do nosso console quando a aplicação iniciar.
Criamos uma pasta src e dentro dela um arquivo index.js

# Executando uma Aplicação Node

Para iniciar uma Aplicação Node, você só precisa digitar:
node src/index.js

podemos criar um script para facilitar a execução no arquivo package.json:

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js"
  },

# Reiniciando uma Aplicação Node Quando o Arquivo Mudar:

Por padrão, o comando node index.js vai iniciar a sua aplicação, mas não vai reiniciar quando você fizer alguma atualização no arquivo. 
Temos um pacote npm que vai monitorar e reiniciar quando mudanças forem identificadas. Esse pacote é o nodemon e para intalar basta seguir o comando a seguir.

npm install nodemon --save-dev

Então quando qualquer alteração for identificada o servidor vai reiniciar como na mensagem a cima. Daqui em diante, por uma questão de praticidade, vamos usar o nodemon quando precisarmos executar a palicação..

Podemos usar o nodemon para iniciar um script do Node.

nodemon index.js

podemos criar um script para facilitar a execução no arquivo package.json:

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js",
    "start nodemon": "nodemon src/index.js"
  },

# Instalando Packages

O arquivo package.json é onde configuramos o nome da aplicação e qual arquivo usar na inicialização. Vai ser nele também que vamos definir os packages que precisamos.

Existem, basicamente, duas maneiras de adicionar packages ao nosso projeto:

    escrevendo direto no arquivo package.json
    instalando via linha de comando

Você vai reparar que esse comando baixa o package e instala ele em uma nova pasta chamada node_modules. É aqui que são instalados os packages em projetos Node e esse comando instala apenas o package que foi chamado especificamente (Express nesse caso).

 # Criando um servidor Usando Express

 Primeiro precisamos adicionar o Express no projeto. Vamos usar a linha de comando para instalar e salvar ele em nosso package.json.

Adicionanl Packages via Linha de Comando
Esse é o comando para instalar o Express e salvar a modificação no package.json:

npm install express --save

Criamos uma arquivo server.js dentro da pasta src:
src/server.js

Então, vamos atualizar o server.js para usar o Express. Começamos instanciando o Express e usando essa instância, definimos uma rota e enviamos o index.html. Então ficamos "escutando" uma porta para responder as requisições do browser.

No arquivo server.js vamos criar nosso servidor, para isso usaremos o seguinte código:

const express = require('express')

const app = express()


app.listen(3000, () => {
	console.log('Servidor de exemplo aberto na porta: 3000')
})

Podemos usar o nodemon para iniciar um script do Node.

nodemon src/server.js


No arquivo server.js vamos inserir um método de roteamento no seguinte código:


// vamos começar, carregando o express e criando a app
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

// então, criamos uma rota para o caminho '/'
app.get('/', (req, res) => {
  //res.send('Hello World!')
  // aqui precisamos enviar o index.html para o cliente
  res.sendFile(path.join(__dirname + '/index.html'))
})

// no fim, iniciamos o serviço na porta 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

podemos criar um script para facilitar a execução no arquivo package.json:

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/index.js",
    "start nodemon": "nodemon src/server.js"
  },

# Métodos de roteamento
Um método de roteamento é derivado a partir de um dos métodos HTTP, e é anexado a uma instância da classe express.

o código a seguir é um exemplo de rotas para a raiz do aplicativo que estão definidas para os métodos GET e POST.


// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

O Express suporta os seguintes métodos de roteamento que correspondem aos métodos HTTP: get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, e connect.

  https://expressjs.com/pt-br/guide/routing.html

# Manipuladores de rota

Manipuladores de rota podem estar na forma de uma função, uma matriz de funções, ou combinações de ambas, como mostrado nos seguintes exemplos.

Uma única função de retorno de chamada pode manipular uma rota. Por exemplo:

app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});

Métodos de resposta
Os métodos do objeto de resposta (res) na seguinte tabela podem enviar uma resposta ao cliente, e finalizar o ciclo solicitação-resposta. Se nenhum destes métodos forem chamados a partir de um manipulador de rota, a solicitação do cliente será deixada em suspenso.

# Método	Descrição
res.download()	Solicita que seja efetuado o download de um arquivo
res.end()	Termina o processo de resposta.
res.json()	Envia uma resposta JSON.
res.jsonp()	Envia uma resposta JSON com suporta ao JSONP.
res.redirect()	Redireciona uma solicitação.
res.render()	Renderiza um modelo de visualização.
res.send()	Envia uma resposta de vários tipos.
res.sendFile	Envia um arquivo como um fluxo de octeto.
res.sendStatus()	Configura o código do status de resposta e envia a sua representação em sequência de caracteres como o corpo de resposta.

# Roteamento de Aplicações Node : app.route()

É possível criar manipuladores de rota encadeáveis para um caminho de rota usando o app.route(). Como o caminho é especificado em uma localização única, criar rotas modulares é útil, já que reduz redundâncias e erros tipográficos. Para obter mais informações sobre rotas, consulte: documentação do Router().

Aqui está um exemplo de manipuladores de rotas encadeáveis que são definidos usando app.route().

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

# Roteamento de Aplicações Node :Express Router

Para adicionar mais páginas ao nosso site, vamos precisar de mais rotas. Isso pode ser feito usando uma feature do Express, o Express Router. 

O que exatamente é o Express Router? Podemos considerar ele como um mini Express sem todas suas features, apenas o roteamente. Então ele não traz configurações ou views, mas provê as APIs de roteamento como .use(), .get(), .param() e route(). Vamos dar uma olhada no que isso siginifica.

Use a classe express.Router para criar manipuladores de rota modulares e montáveis. Uma instância de Router é um middleware e sistema de roteamento completo; por essa razão, ela é frequentemente referida como um “mini-aplicativo”

# Roteamento Básico
Já definimos uma rota básica para a homepage. O Express permite definirmos rotas diretamente no objeto app. Podemos gerenciar muiltiplas ações HTTP como GET, POST, PUT/PATCH e DELETE.

# express.Router()
O express.Router() age como uma mini aplicação. Podemos chamar uma instância dele (como fazemos com o Express) e então definir as rotas nele. Vamos ver um exemplo para entender exatamente o que isso significa.


# teste

https://medium.com/owinteractive/entendendo-o-express-router-e-usando-m%C3%B3dulos-de-forma-simples-24ca6723fe91
https://github.com/stemmlerjs/clean-code-typescript


infra/http/app.ts
app.use('/api/v1', v1Router)
ddd-forum/src/shared/infra/http/api/v1.ts
mport express from 'express'
import { userRouter } from '../../../../modules/users/infra/http/routes';
import { memberRouter, commentRouter } from '../../../../modules/forum/infra/http/routes';
import { postRouter } from '../../../../modules/forum/infra/http/routes/post';

const v1Router = express.Router();

v1Router.get('/', (req, res) => {
  return res.json({ message: "Yo! we're up" });
})

v1Router.use('/users', userRouter);
v1Router.use('/members', memberRouter);
v1Router.use('/posts', postRouter);
v1Router.use('/comments', commentRouter);

export { v1Router }

ddd-forum/src/modules/users/
import { userRouter } from '../../../../modules/users/infra/http/routes';
ddd-forum/src/modules/users/infra/http/routes/

import express from 'express'
import { createUserController } from '../../../useCases/createUser';
import { deleteUserController } from '../../../useCases/deleteUser';
import { getUserByUserNameController } from '../../../useCases/getUserByUserName';
import { loginController } from '../../../useCases/login';
import { middleware } from '../../../../../shared/infra/http';
import { getCurrentUserController } from '../../../useCases/getCurrentUser';
import { refreshAccessTokenController } from '../../../useCases/refreshAccessToken';
import { logoutController } from '../../../useCases/logout';

const userRouter = express.Router();

userRouter.post('/',
  (req, res) => createUserController.execute(req, res)
);

userRouter.get('/me',
  middleware.ensureAuthenticated(),
  (req, res) => getCurrentUserController.execute(req, res)
)

userRouter.post('/login',
  (req, res) => loginController.execute(req, res)
)

userRouter.post('/logout',
  middleware.ensureAuthenticated(),
  (req, res) => logoutController.execute(req, res)
)

userRouter.post('/token/refresh',
  (req, res) => refreshAccessTokenController.execute(req, res)
)

userRouter.delete('/:userId',
  middleware.ensureAuthenticated(),
  (req, res) => deleteUserController.execute(req, res)
)

userRouter.get('/:username',
  middleware.ensureAuthenticated(),
  (req, res) => getUserByUserNameController.execute(req, res)
)

export { userRouter };



/src/modules/users/useCases/createUser/CreateUserController.ts /


# teste

// vamos começar, carregando o express e criando a app
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

// 1. chamar uma instância do router
var adminRouter = express.Router()

// então, criamos uma rota para '/'
app.get('/', (req, res) => {
  //res.send('Hello World!')
  // aqui precisamos enviar o index.html para o cliente
  res.sendFile(path.join(__dirname + '/index.html'))
})


// 2. criar rotas para ele
// página principal (http://localhost:8000/admin)
adminRouter.get('/', (req, res) => {
  res.send('Eu sou o dashboard!')
})

// página de usuários (http://localhost:8000/admin/users)
adminRouter.get('/users', (req, res) => {
  res.send('Aqui listamos todos os usuários!')
})

// página de posts (http://localhost:8000/admin/posts)
adminRouter.get('/posts', (req, res) => {
  res.send('Aqui veremos todos os posts!')
})

// 3. adicionar essas rotas a aplicação principal
app.use('/admin', adminRouter)

// no fim, iniciamos o serviço na porta 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

Nós chamamos uma instância do express.Router() e atribuimos a uma variável adminRouter, aplicamos algumas rotas nele e informamos nossa app para usa-las.

Agora podemos acessar o painel administrativo em http://localhost:3000/admin e as sub-páginas em http://localhost:8000/admin/users e http://localhost:3000/admin/posts.

Perceba como podemos configurar um prefixo para as rotas definidas. Se alterarmos a última linha para app.use('/app', adminRouter), então as rotas que passam a valer serão http://localhost:3000/app/ e http://localhost:3000/app/users.

Isso é bastante poderoso, porque podemos criar multiplos express.Router() e aplica-los a nossa aplicação. Podento ter rotas básicas, rotas autenticadas e até rotas para API.

Usando o Roteamento, podemos tornar nossa aplicação mais flexível e modular que nunca, criando multiplas instâncias de roteamento e aplicando elas conforme o necessário. Agora, vamos dar uma olhada em como vamos usar um middleware para manipular as requisições.

# Organizando Rotas

Usando o Router(), podemos dividir a aplicação em partes. Isso significa que podemos criar um basicRouter para o roteamento básico do nosso frontend. Podemos, também, ter um adminRouter para rotas de administração protegidas por uma autenticação.

Roteando nossa aplicação dessa maneira podemos separar cada parte. Isso nos da a flexibilidade que precisamos em aplicações e APIs mais complexas. Dessa maneira, mantemos a aplicação limpa e organizada, movendo cada definição de roteamento para seu respectivo arquivo e apenas o instanciando e passando para o app.use() dessa maneira:

app.use('/', basicRoutes)
app.use('/admin', adminRoutes)
app.use('/api', apiRoutes)

# Rotas com Parâmetros: /users/:name
Para adicionar uma rota com parâmetros na aplicação, precisamos de uma rota tipo /admin/users/:name onde passamos um nome na URL e a aplicação imprime um "Faalaaa name!". Veja como essa rota seria:

// rota com parâmetros (http://localhost:8000/admin/users/:name)
adminRouter.get('/users/:name', (req, res) => {
  res.send('Faalaaa ' + req.params.name + '!')
})

Agora quando visitarmos http://localhost:8000/admin/users/dev veremos um "Faalaaa dev!", o req.params armazena todos os parâmetros passados na requisição.

[Express Router Parameters]

Mais na frente, vamos usar isso para retornar os dados do usuário informado e construir um painel de controle para o gerenciamento de usuários.

Agora, vamos dizer que precisemos validar esse nome de alguma forma. Talvez para ter certeza de que não é um nome impróprio. Então, faríamos isso em um middleware e vamos usar um especial pra isso...

Middleware para Parâmetros: .param()
Vamos usar o middleware .param() do Express. Isso cria um middleware que será executado para um parâmetro específico. Nesse caso, para o :name nessa rota. Novamente, precisamos ter certeza de coloca-lo antes da definição da rota e ficará dessa maneira:

// middleware de validação para 'name'
adminRouter.param('name', (req, res, next, name) => {
  // faça a validação do 'name' aqui
  // validação blah blah
  // logar alguma coisa pra sabermos se funciona
  console.log('validando o nome: ' + name)

  // quando a validação acabar, salve o novo nome na requisição
  req.name = name
  // vá para a próxima coisa a fazer
  next()
})

// roteamento com parâmetro (http://localhost:8000/admin/users/:name)
adminRouter.get('/users/:name', (req, res) => {
  res.send('Faalaaa ' + req.name + '!')
})
Agora, quando a rota /users/:name for acessada, o middleware será executado. Dessa forma, podemos executar quaisquer validações e então passar a nova variável a rota .get armazenando-a no req (request). Então, podemos acessá-la trocando o req.params.name pelo req.name já que pegamos ela do req.params.name e colocamos no req.name dentro do middleware.

Quando visitarmos http://localhost:8000/admin/users/lucas no browser veremos a requisição logada no console.


# Recapitulando
Com o Express Router, temos muita flexibilidade para definir rotas em nossa aplicação. Com ele podemos:

Usar o express.Router() várias vezes para definir grupos de rotas
Aplicar o express.Router() em uma seção do site usando app.use()
Usar um middleware para processar as requisições
Usar um middleware para validação de parametros usando .param()
Usar app.route() como um atalho para o express.Router() e definir muiltiplas ações para uma rota


//http://stack.desenvolvedor.expert/comecando-com-node/executando-uma-app-node.html