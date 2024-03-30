import { headers } from "next/headers";

export const GET = async (request) => {
    // const requestHeader = new Headers(request.headers); manual thing
    // console.log(requestHeader.get("Authorization"));

    const headerList = headers();
    console.log(headerList.get("Authorization"));
    return new Response("api header");
};
