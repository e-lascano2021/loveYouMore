import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get("/loveArmy", checkAuth, profilesCtrl.index)
router.get('/loveArmy/new', checkAuth, profilesCtrl.create)
router.get("/:id", checkAuth, profilesCtrl.show)
export { router }
