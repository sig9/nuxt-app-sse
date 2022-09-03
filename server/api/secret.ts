import type { IncomingMessage, ServerResponse } from 'http'

export default async (event) => {
  
  // @ts-ignore
  const user = event.req.user;

  if(user) {
    event.res.statusCode = 200
    event.res.end('This is a top secret message from the API')
  }
  event.res.statusCode = 400
  event.res.end('Must be signed in to read secret message')
}