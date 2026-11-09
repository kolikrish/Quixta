export async function GET(request) {
  const seen = request.headers.get("x-loader-seen") === "1";
  return new Response(`:root{--loader-cached:${seen ? 1 : 0}}`, {
    headers: {
      "Content-Type": "text/css; charset=utf-8",
      "Cache-Control": seen ? "private, max-age=31536000, immutable" : "no-store",
    },
  });
}
