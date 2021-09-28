import {
  Router
} from 'express'
import CharacterHandler from '../controller/CharacterController.js'
import singleFilmHandler from '../controller/SingleFilmController.js'
import AllFilmsController from '../controller/AllFilmsController.js'


const router = Router()

router
  .route('/films')
  .get(AllFilmsController)
router
.route('/film/:filmID/character')
.get(CharacterHandler)
router
  .route('/film/:id')
  .get(singleFilmHandler)


export default router