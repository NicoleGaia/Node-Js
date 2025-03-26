import { Router } from "express";
import { getPlayer, getPlayerById, postPlayer, deletePlayer } from "./controllers/players-controllers";
import { getClubs } from "./controllers/clubs-controller";

const router = Router()

router.get("/players", getPlayer)
router.get("/players/:id", getPlayerById)

router.post("/players", postPlayer)

router.delete("/players/:id", deletePlayer)

router.get("/clubs", getClubs)

export default router