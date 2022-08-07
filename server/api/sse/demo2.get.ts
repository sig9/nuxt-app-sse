import crypto from 'crypto';
import { sendStream } from 'h3'

export default defineEventHandler(async (e) => {
    let { readable, writable } = new TransformStream()
    // var headers = new Headers();
    // headers.append('Content-Type', 'text/event-stream');
    // headers.append('Cache-Control', 'no-cache');
    // headers.append('Connection', 'keep-alive');
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // var init = { "status": 200, "statusText": "ok", "headers": headers };
  
    // e.res.writeHead(200, "ok", {
    //     'Cache-Control': 'no-cache',
    //     'Content-Type': 'text/event-stream',
    //     'Connection': 'keep-alive',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    // });

    writeToStream(writable)

    return sendStream(e, readable);
    //return new Response(readable, init)
});

async function writeToStream(writable) {

    let writer = writable.getWriter()
  
    var id = "id-test"
  
    // send first message
    // await constructSSE(writer, id, "first message");
    let encoder = new TextEncoder()
    // send message every 5 second
    setInterval(async () => {
      const data = "eeeeeeeeeeeeeeeeeeeee";
      await writer.write(encoder.encode('id: ' + id + '\n'));
      await writer.write(encoder.encode("data: " + " - SSE Server - " + '\n\n'));
    }, 1000);
  
  }
  
