import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get("/loveArmy", checkAuth, profilesCtrl.index)
router.post("/loveArmy/new", checkAuth, profilesCtrl.create)
router.get("/loveArmy/:id", checkAuth, profilesCtrl.showSoldier)
router.get("/:id", checkAuth, profilesCtrl.show)
router.patch("/loveArmy/:id", checkAuth, profilesCtrl.updatePoints)
export { router }
