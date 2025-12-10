import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(request) {
	const { pathname } = request.nextUrl;
	if (pathname.startsWith("/admin/login")) {
		return NextResponse.next();
	}
	const token = request.cookies.get("admin_session")?.value;
	const secret = process.env.SESSION_SECRET;
	if (!secret) {
		return NextResponse.redirect(new URL("/admin/login", request.url));
	}
	if (!token) {
		return NextResponse.redirect(new URL("/admin/login", request.url));
	}
	const { valid } = await verifyToken(token, secret);
	if (!valid) {
		return NextResponse.redirect(new URL("/admin/login", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ["/admin/:path*"],
};
