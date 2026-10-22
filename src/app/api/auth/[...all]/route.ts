import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

const unavailable = (request: Request) => {
    if (request.method === "GET" && new URL(request.url).pathname.endsWith("/get-session")) {
        return Response.json(null);
    }

    return Response.json({ message: "Authentication is not configured." }, { status: 503 });
};

export const { POST, GET } = auth
    ? toNextJsHandler(auth)
    : { POST: unavailable, GET: unavailable };
