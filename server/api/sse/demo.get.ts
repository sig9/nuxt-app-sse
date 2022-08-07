import crypto from 'crypto';

export default defineEventHandler(async (e) => {
    //Returning headers to the client
    e.res.writeHead(200, {
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'Content-Type': 'text/event-stream',
    });

    const sseId = crypto.randomUUID().toString();

    const sendEvent = (data: string) => {
        e.res.write(`id: ${sseId}\n`);
        e.res.write(`data: ${data}\n\n`);
      };

    const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    let times = 10;

    for (let i = 0; i < times; i++) {
        const data = {date:new Date(), eventCount:i};
        sendEvent(JSON.stringify(data));
        await sleep(1000);
    }
    e.res.shouldKeepAlive
    sendEvent('[DONE]');
    e.res.end();
});