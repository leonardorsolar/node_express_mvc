// vamos começar, carregando o express e criando a app
import express from 'express';
import { v1Router } from './api/v1';


const app = express()
const path = require('path')
const port = process.env.PORT || 5000;

app.use('/api/v1', v1Router)

// no fim, iniciamos o serviço na porta 5000
app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`)
})



// // então, criamos uma rota para '/'
// app.get('/', (req, res) => {
//   //res.send('Hello World!')
//   // aqui precisamos enviar o index.html para o cliente
//   res.sendFile(path.join(__dirname + '/index.html'))
// })

// // 1. chamar uma instância do router
// var adminRouter = express.Router()

// // 2. criar rotas para ele
// // página principal (http://localhost:8000/admin)
// adminRouter.get('/', (req, res) => {
//   res.send('Eu sou o dashboard!')
// })

// // página de usuários (http://localhost:8000/admin/users)
// adminRouter.get('/users', (req, res) => {
//   res.send('Aqui listamos todos os usuários!')
// })

// // página de posts (http://localhost:8000/admin/posts)
// adminRouter.get('/posts', (req, res) => {
//   res.send('Aqui veremos todos os posts!')
// })

// // 3. adicionar essas rotas a aplicação principal
// app.use('/admin', adminRouter)

