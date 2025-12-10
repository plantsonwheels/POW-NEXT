import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

export async function POST(request) {
	const body = await request.json().catch(() => ({}));
	const { email, password } = body || {};
	const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
	const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
	const SESSION_SECRET = process.env.SESSION_SECRET;

	if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !SESSION_SECRET) {
		return NextResponse.json(
			{ success: false, error: "Server not configured" },
			{ status: 500 }
		);
	}
	if (!email || !password) {
		return NextResponse.json(
			{ success: false, error: "Email and password required" },
			{ status: 400 }
		);
	}
	if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
		return NextResponse.json(
			{ success: false, error: "Invalid credentials" },
			{ status: 401 }
		);
	}

	const token = await signToken(
		{ sub: ADMIN_EMAIL, role: "admin" },
		SESSION_SECRET,
		60 * 60 * 4
	);
	const res = NextResponse.json({ success: true }, { status: 200 });
	res.cookies.set("admin_session", token, {
		httpOnly: true,
		sameSite: "lax",
		path: "/",
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 4,
	});
	return res;
}
