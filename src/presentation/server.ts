import express, { Router } from 'express'
import path from 'path';


interface Options {
    port: number,
    routes: Router
    public_path?: string;
}


export class Server {

    public readonly app = express();
    public readonly port: number;
    private serverListener?: any;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port, routes, public_path = 'public' } = options;
        this.port = port;
        this.publicPath = public_path;
        this.routes = routes;
    }


    //metodo
    async start() {
        //* Middlewares
        this.app.use(express.json());


        //* public folder
        this.app.use(express.static(this.publicPath))

        //Routes
        this.app.use(this.routes)

        //* cadena de connecion
        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`);
        });



        //*SPA
        this.app.get('*', (req, res) => {
            const indexPath = path.join(__dirname + `../../..${this.publicPath}/index.html`);
            res.sendFile(indexPath);
        })

    }
    public close() {
        this.serverListener?.this.close();
    }

}



