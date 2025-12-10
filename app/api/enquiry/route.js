import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Enquiry from "@/models/Enquiry";
import Product from "@/models/Product";
import nodemailer from "nodemailer";
import { customerEnquiryHtml, adminEnquiryHtml } from "@/lib/emailTemplates";

export async function POST(request) {
	try {
		await dbConnect();

		const body = await request.json();

		// Save enquiry
		const enquiry = await Enquiry.create(body);
		let product = null;
		if (enquiry?.productId) {
			try {
				product = await Product.findById(enquiry.productId);
			} catch {}
		}

		// Send Email to Customer
		try {
			const transporter = nodemailer.createTransport({
				service: "gmail",
				auth: {
					user: process.env.NODEMAILER_EMAIL,
					pass: process.env.NODEMAILER_PASSWORD,
				},
			});
			const customerHtml = customerEnquiryHtml(enquiry, product);
			await transporter.sendMail({
				from: `"Plants on Wheels" <${process.env.NODEMAILER_EMAIL}>`,
				to: enquiry.email,
				subject: "Enquiry Received – Plants on Wheels",
				html: customerHtml,
			});
		} catch (err) {
			console.log("Failed to send email to customer:", err.message);
		}

		/*
		// Send WhatsApp to Customer
		try {
			await sendWhatsAppTemplate(
				process.env.TWILIO_TEMPLATE_CUSTOMER,
				enquiry.phone,
				[enquiry.name, enquiry.productName || "General Enquiry"]
			);
		} catch (err) {
			console.log("Failed to send WhatsApp to customer:", err.message);
		}
		*/

		// Send Email to Admin
		try {
			const transporter = nodemailer.createTransport({
				service: "gmail",
				auth: {
					user: process.env.NODEMAILER_EMAIL,
					pass: process.env.NODEMAILER_PASSWORD,
				},
			});
			const adminHtml = adminEnquiryHtml(enquiry, product);
			await transporter.sendMail({
				from: `"Plants on Wheels" <${process.env.NODEMAILER_EMAIL}>`,
				to: process.env.ADMIN_EMAIL,
				subject: "New Enquiry – Plants on Wheels",
				html: adminHtml,
			});
		} catch (err) {
			console.log("Failed to send email to admin:", err.message);
		}

		/*
		// Send WhatsApp to Admin
		try {
			await sendWhatsAppTemplate(
				process.env.TWILIO_TEMPLATE_ADMIN,
				process.env.TWILIO_WHATSAPP_TO,
				[
					enquiry.name,
					enquiry.productName || "General Enquiry",
					enquiry.phone,
					enquiry.email,
					enquiry.message,
				]
			);
		} catch (err) {
			console.log("Failed to send WhatsApp to admin:", err.message);
		}
		*/

		return NextResponse.json(
			{
				success: true,
				data: enquiry,
				message: "Enquiry received successfully!",
			},
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: error.message },
			{ status: 400 }
		);
	}
}

export async function GET(request) {
	try {
		await dbConnect();

		const enquiries = await Enquiry.find().sort({ createdAt: -1 });

		return NextResponse.json(
			{ success: true, data: enquiries },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: error.message },
			{ status: 500 }
		);
	}
}
