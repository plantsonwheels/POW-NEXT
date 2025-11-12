import mongoose from "mongoose"

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
    image: {
      type: String,
      required: [true, "Please provide a product image URL"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a product price"],
    },
    category: {
      type: String,
      default: "Plants",
    },
  },
  { timestamps: true },
)

export default mongoose.models.Product || mongoose.model("Product", productSchema)
