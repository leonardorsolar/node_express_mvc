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

// middleware de roteamento exeutado a cada requisição
adminRouter.use((req, res, next) => {
  // logar cada requisição no console
  console.log(req.method, req.url)
  // continue com o que precisar ser feito e vá para a rota
  next()
})

// no fim, iniciamos o serviço na porta 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})