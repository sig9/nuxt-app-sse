import type { IncomingMessage, ServerResponse } from "http";
import { useBody } from 'h3'

export default async (event) => {

    if(event.req.method !== 'POST') return 'Must be post request'

    const { user } = await useBody(event.req) // only for POST request
    
    // @ts-ignore
    event.req.user = user;

    return { updated: true }
};
