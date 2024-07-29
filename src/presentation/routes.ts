import { Router } from "express";
import { Routes } from "./auth/routes";



export class AppRouter{
    static get routes(): Router{

        const router = Router();
   
   
        //* Routes 
        router.use('/', Routes.routes )
        return router;
    }
}