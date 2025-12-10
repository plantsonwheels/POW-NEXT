import { NextResponse } from "next/server";
import cloudinary, {
	isCloudinaryConfigured,
	missingCloudinaryConfig,
} from "@/lib/cloudinary";

export async function POST(req) {
	if (!isCloudinaryConfigured) {
		const msg = missingCloudinaryConfig.length
			? `Missing environment variables: ${missingCloudinaryConfig.join(", ")}`
			: "Missing Cloudinary configuration";
		return NextResponse.json({ success: false, message: msg }, { status: 500 });
	}
	try {
		const formData = await req.formData();
		const file = formData.get("file");
		const folderInput = formData.get("folder");
		const folder = folderInput || "products";
		const allowed = ["products"];

		if (!file) {
			return NextResponse.json(
				{ success: false, message: "No file uploaded" },
				{ status: 400 }
			);
		}
		if (!allowed.includes(folder)) {
			return NextResponse.json(
				{ success: false, message: "Invalid folder" },
				{ status: 400 }
			);
		}
		if (!file.type?.startsWith("image/")) {
			return NextResponse.json(
				{ success: false, message: "Only image files are allowed" },
				{ status: 400 }
			);
		}
		if (file.size > 5 * 1024 * 1024) {
			return NextResponse.json(
				{ success: false, message: "File size must be less than 5MB" },
				{ status: 400 }
			);
		}

		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		const base64 = buffer.toString("base64");
		const dataUri = `data:${file.type};base64,${base64}`;

		const result = await cloudinary.uploader.upload(dataUri, {
			resource_type: "image",
			folder,
			transformation: [{ width: 1600, height: 1600, crop: "limit" }],
			quality: "auto",
			format: "webp",
			use_filename: true,
			unique_filename: true,
		});

		return NextResponse.json(
			{ success: true, url: result.secure_url, publicId: result.public_id },
			{ status: 200 }
		);
	} catch (error) {
		const cloudinaryMessage = error?.response?.body?.error?.message;
		const message = cloudinaryMessage || error?.message || "Upload failed";
		return NextResponse.json({ success: false, message }, { status: 500 });
	}
}
