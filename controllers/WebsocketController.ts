import { WebSocket, acceptWebSocket, acceptable } from '../deps.ts';

async function websocketController(ctx: any) {
    console.log('Hello from the other side of the world');
    if (acceptable(ctx.request.serverRequest)) {
        const {conn, r: bufReader, w: bufWriter, headers} = ctx.request.serverRequest;
        const socket = await acceptWebSocket({
            conn, 
            bufReader,
            bufWriter,
            headers
        });
        await socketEventHandlers(socket);
    } else {
        throw new Error('Error when connecting websocket');
    }
};

async function socketEventHandlers(ws: WebSocket) {
    console.log('Server side connected');
    // Wait for new message
    for await (const event of ws) {
        const message = typeof event === 'string' ? event : '';
        console.log(message);
    }
}

export default websocketController;