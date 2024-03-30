import { headers, cookies } from "next/headers";

export const GET = async (request) => {
    // const requestHeader = new Headers(request.headers); manual thing
    // console.log(requestHeader.get("Authorization"));

    const headerList = headers();
    cookies().set("page", "1");

    console.log(headerList.get("Authorization"));
    console.log(cookies().get("page"));
    console.log(request.cookies.get("theme"));
    return new Response("api header", {
        headers: {
            "Set-Cookie": "theme=dark",
        },
    });
};
