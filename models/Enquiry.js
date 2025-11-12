import mongoose from "mongoose"

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"],
    },
    phone: {
      type: String,
      required: [true, "Please provide your phone number"],
    },
    productId: {
      type: String,
      required: false,
    },
    productName: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: [true, "Please provide a message"],
    },
    type: {
      type: String,
      enum: ["product", "service", "general"],
      default: "general",
    },
  },
  { timestamps: true },
)

export default mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema)
