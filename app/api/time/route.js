export const dynamic = "force-dynamic";

export const GET = async () => {
    return new Response(new Date().toLocaleTimeString());
};
