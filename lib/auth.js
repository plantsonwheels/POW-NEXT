import { SignJWT, jwtVerify } from "jose";

export async function signToken(payload, secret, expiresInSeconds = 60 * 60) {
	const key = new TextEncoder().encode(secret);
	const token = await new SignJWT(payload)
		.setProtectedHeader({ alg: "HS256", typ: "JWT" })
		.setExpirationTime(`${expiresInSeconds}s`)
		.sign(key);
	return token;
}

export async function verifyToken(token, secret) {
	try {
		const key = new TextEncoder().encode(secret);
		const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });
		return { valid: true, payload };
	} catch (e) {
		return { valid: false, reason: e?.code || e?.message || "invalid" };
	}
}
