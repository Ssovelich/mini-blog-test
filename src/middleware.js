import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "uk"];
const defaultLocale = "uk";

function getLocale(request) {
  const headers = Object.fromEntries(request.headers.entries());
  const negotiator = new Negotiator({ headers });
  return match(negotiator.languages(), locales, defaultLocale);
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathnameSegments = pathname.split("/");
  const firstSegment = pathnameSegments[1];

  if (firstSegment && !locales.includes(firstSegment)) {
    return NextResponse.rewrite(new URL(`/${defaultLocale}/404`, request.url));
  }

  if (locales.includes(firstSegment)) {
    return NextResponse.next();
  }

  const locale = getLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!_next|favicon.png|images|api).*)"],
};
