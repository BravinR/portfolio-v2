import { getIronSession, createResponse } from "iron-session";

const ninetyDaysInSeconds= 90 * 24 * 3600;

export interface Data {
  user?: {
    id: string;
    email: string;
  };
}

export const  getSession = (req: Request, res: Response) => {
  const session = getIronSession<Data>(req, res, {
    cookieName: "AUTH_COOKIE",
    password: process.env.SESSION_PASSWORD as string,
    ttl: ninetyDaysInSeconds,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });

  return session;
};

export { createResponse };