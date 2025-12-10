import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Product from "@/models/Product";

export async function GET(_request, { params }) {
	try {
		await dbConnect();

		const { id } = await params;
		if (!id) {
			return NextResponse.json(
				{ success: false, error: "Missing product id" },
				{ status: 400 }
			);
		}

		const product = await Product.findById(id);
		if (!product) {
			return NextResponse.json(
				{ success: false, error: "Product not found" },
				{ status: 404 }
			);
		}

		const related = await Product.find({ _id: { $ne: id }, type: product.type })
			.sort({ createdAt: -1 })
			.limit(4);

		return NextResponse.json(
			{ success: true, data: { product, related } },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: error.message },
			{ status: 500 }
		);
	}
}
