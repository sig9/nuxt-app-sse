import type { IncomingMessage, ServerResponse } from "http";

export default async (event) => {
    
  // @ts-ignore
  const user = event.req.user;

  return user ? user : "User is signed out"
};
