import mongoose from "mongoose"

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a service name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please provide a service description"],
    },
    icon: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
)

export default mongoose.models.Service || mongoose.model("Service", serviceSchema)
