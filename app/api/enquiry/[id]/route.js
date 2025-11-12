import { NextResponse } from "next/server"
import dbConnect from "@/lib/dbConnect"
import Enquiry from "@/models/Enquiry"

export async function DELETE(request, { params }) {
  try {
    await dbConnect()

    const enquiry = await Enquiry.findByIdAndDelete(params.id)

    if (!enquiry) {
      return NextResponse.json({ success: false, error: "Enquiry not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: enquiry }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
