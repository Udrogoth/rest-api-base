import { Request, Response } from "express";


export class Controller {


    saludo = (req: Request, res: Response) => {
        res.json('Hello World!!!')
    }


}