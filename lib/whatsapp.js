import twilio from "twilio"

const accountSid = process.env.TWILIO_SID
const authToken = process.env.TWILIO_AUTH
const fromNumber = process.env.TWILIO_WHATSAPP_FROM
const toNumber = process.env.TWILIO_WHATSAPP_TO

const client = twilio(accountSid, authToken)

export const sendWhatsAppMessage = async (message) => {
  try {
    const result = await client.messages.create({
      from: `whatsapp:${fromNumber}`,
      to: `whatsapp:${toNumber}`,
      body: message,
    })
    return result
  } catch (error) {
    console.error("WhatsApp message error:", error)
    throw error
  }
}

export const formatEnquiryMessage = (enquiry) => {
  return `
New Enquiry Received!

Name: ${enquiry.name}
Email: ${enquiry.email}
Phone: ${enquiry.phone}
Product: ${enquiry.productName || "General Enquiry"}
Message: ${enquiry.message}

Time: ${new Date(enquiry.createdAt).toLocaleString()}
  `.trim()
}
