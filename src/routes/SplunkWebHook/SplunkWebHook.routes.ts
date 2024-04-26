import express, { Router } from "express";
import {SplunkWebHookController} from "../../controller/SplunkWebHook"

let router: Router = express.Router();

router.post("/", SplunkWebHookController.getAlert);



export default router;