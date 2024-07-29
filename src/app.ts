import { AppRouter } from "./presentation/routes";
import { Server } from "./presentation/server";

(() => {
    main();
})()



async function main() {
    const server = new Server({
        port: 3000,
        routes: AppRouter.routes,
    })

    server.start();
}