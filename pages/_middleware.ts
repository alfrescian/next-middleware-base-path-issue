import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line consistent-return
export function middleware(req: NextRequest) {
  const { basePath, pathname, host } = req.nextUrl;

  // permanent redirect to lowerCase pathname
  if (pathname !== pathname.toLowerCase()) {
    req.nextUrl.pathname = pathname.toLowerCase();
    req.nextUrl.host = req.headers.get("X-Original-Host") ?? host;

    console.log("redirecting from", {
      from: { pathname, host, basePath },
      to: {
        pathname: req.nextUrl.pathname,
        host: req.nextUrl.host,
        basePath: req.nextUrl.basePath,
      },
    });
    return NextResponse.redirect(req.nextUrl, 301);
  }
}
