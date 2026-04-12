import createMiddleware from "next-intl/middleware";
import { routing } from "./src/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(hi|en)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
