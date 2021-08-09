import * as Hapi from "@hapi/hapi";
import route from "./route";

const start = async () => {
    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
        routes: {
            cors: true
        }
    });

    route(server);

    await server.start();
};

start().catch(console.error);