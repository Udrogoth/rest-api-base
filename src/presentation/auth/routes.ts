import { Router } from "express";
import { Controller } from "./controller";



export class Routes {


    static get routes(): Router {
        
        const router = Router();
        const controller = new Controller();

        router.get('/saludo', controller.saludo)


        return router;
    }




}