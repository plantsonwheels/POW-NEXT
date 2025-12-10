import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a product name"],
			trim: true,
		},
		description: {
			type: String,
			required: [true, "Please provide a product description"],
		},
		type: {
			type: String,
			enum: ["indoor", "outdoor"],
			required: [true, "Please specify product type"],
		},
		benefits: {
			type: [String],
			default: [],
		},
		images: {
			type: [String],
			required: [true, "Please add atleast one image and maximum 5 images"],
			validate: {
				validator: (arr) => arr.length >= 1 && arr.length <= 5,
				message: "Please add atleast one image and maximum 5 images",
			},
		},
		price: {
			type: Number,
			required: [true, "Please provide a product price"],
		},
		category: {
			type: String,
			default: "Plants",
		},
		size: {
			type: String,
			enum: ["Small", "Medium", "Large", "Extra Large"],
			default: "Medium",
		},
	},
	{ timestamps: true }
);

export default mongoose.models.Product ||
	mongoose.model("Product", productSchema);
