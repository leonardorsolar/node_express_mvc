
import express from 'express'
import { createUserController } from '../../../useCases/createUser';
// import { deleteUserController } from '../../../useCases/deleteUser';
//import { getCurrentUserController } from '../../../useCases/getCurrentUser';
// import { loginController } from '../../../useCases/login';
//import { refreshAccessTokenController } from '../../../useCases/refreshAccessToken';
// import { middleware } from '../../../../../shared/infra/http';


const userRouter = express.Router();

userRouter.post('/',
  (req, res) => createUserController.execute(req, res)
);

// userRouter.get('/me',
//   middleware.ensureAuthenticated(),
//   (req, res) => getCurrentUserController.execute(req, res)
// )

// userRouter.post('/login',
//   (req, res) => loginController.execute(req, res)
// )

// userRouter.post('/logout',
//   middleware.ensureAuthenticated(),
//   (req, res) => logoutController.execute(req, res)
// )

// userRouter.post('/token/refresh',
//   (req, res) => refreshAccessTokenController.execute(req, res)
// )

// userRouter.delete('/:userId',
//   middleware.ensureAuthenticated(),
//   (req, res) => deleteUserController.execute(req, res)
// )

// userRouter.get('/:username',
//   middleware.ensureAuthenticated(),
//   (req, res) => getUserByUserNameController.execute(req, res)
// )



export { userRouter };