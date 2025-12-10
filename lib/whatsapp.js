// import twilio from "twilio"

// const accountSid = process.env.TWILIO_SID
// const authToken = process.env.TWILIO_AUTH
// const fromNumber = process.env.TWILIO_WHATSAPP_FROM
// const toNumber = process.env.TWILIO_WHATSAPP_TO

// const client = twilio(accountSid, authToken)

// function normalizeWhatsApp(value) {
//   if (!value) return null
//   const v = value.trim()
//   if (v.startsWith("whatsapp:")) return v
//   const withPlus = v.startsWith("+") ? v : `+${v}`
//   return `whatsapp:${withPlus}`
// }

// export const sendWhatsAppMessage = async (message) => {
//   if (!accountSid || !authToken || !fromNumber || !toNumber) {
//     throw new Error("Twilio environment incomplete: set TWILIO_SID, TWILIO_AUTH, TWILIO_WHATSAPP_FROM, TWILIO_WHATSAPP_TO")
//   }
//   const from = normalizeWhatsApp(fromNumber)
//   const to = normalizeWhatsApp(toNumber)
//   try {
//     const result = await client.messages.create({
//       from,
//       to,
//       body: message,
//     })
//     return result
//   } catch (error) {
//     console.error("WhatsApp message error:", { code: error?.code, status: error?.status, message: error?.message, moreInfo: error?.moreInfo })
//     throw error
//   }
// }

// export const formatEnquiryMessage = (enquiry) => {
//   return `
// New Enquiry Received!

// Name: ${enquiry.name}
// Email: ${enquiry.email}
// Phone: ${enquiry.phone}
// Product: ${enquiry.productName || "General Enquiry"}
// Message: ${enquiry.message}

// Time: ${new Date(enquiry.createdAt).toLocaleString()}
//   `.trim()
// }

import twilio from "twilio";

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const fromNumber = process.env.TWILIO_WHATSAPP_FROM;

const client = twilio(accountSid, authToken);

function normalizeWhatsApp(value) {
	if (!value) return null;
	const v = value.trim();
	if (v.startsWith("whatsapp:")) return v;
	const withPlus = v.startsWith("+") ? v : `+${v}`;
	return `whatsapp:${withPlus}`;
}

// Generic template sender
export const sendWhatsAppTemplate = async (templateSid, to, params = []) => {
	if (!accountSid || !authToken || !fromNumber) {
		throw new Error("Twilio environment incomplete");
	}

	const from = normalizeWhatsApp(fromNumber);
	const toNumber = normalizeWhatsApp(to);

	try {
		const result = await client.messages.create({
			from,
			to: toNumber,
			contentSid: templateSid,
			contentVariables: JSON.stringify(
				params.reduce(
					(acc, val, idx) => ({
						...acc,
						[(idx + 1).toString()]: val,
					}),
					{}
				)
			),
		});

		return result;
	} catch (error) {
		console.error("WhatsApp Template Error:", {
			code: error?.code,
			message: error?.message,
			moreInfo: error?.moreInfo,
		});
		throw error;
	}
};
