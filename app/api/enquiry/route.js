import { NextResponse } from "next/server"
import dbConnect from "@/lib/dbConnect"
import Enquiry from "@/models/Enquiry"
import { sendWhatsAppMessage, formatEnquiryMessage } from "@/lib/whatsapp"

export async function POST(request) {
  try {
    await dbConnect()

    const body = await request.json()

    // Create enquiry in database
    const enquiry = await Enquiry.create(body)

    // Send WhatsApp notification
    try {
      const message = formatEnquiryMessage(enquiry)
      await sendWhatsAppMessage(message)
    } catch (whatsappError) {
      console.log("WhatsApp notification failed, but enquiry saved:", whatsappError.message)
      // Continue even if WhatsApp fails - enquiry is still saved
    }

    return NextResponse.json(
      { success: true, data: enquiry, message: "Enquiry received successfully!" },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}

export async function GET(request) {
  try {
    await dbConnect()

    const enquiries = await Enquiry.find().sort({ createdAt: -1 })

    return NextResponse.json({ success: true, data: enquiries }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
