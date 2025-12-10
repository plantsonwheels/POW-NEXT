export function customerEnquiryHtml(enquiry, product) {
	const productText = enquiry.productName ? ` for <strong>${enquiry.productName}</strong>` : "";
	const emailText = enquiry.email ? ` / <strong>${enquiry.email}</strong>` : "";
	const time = new Date(enquiry.createdAt).toLocaleString();
	const hasProduct = !!product;
	const imgs = hasProduct && Array.isArray(product.images) ? product.images.slice(0, 2) : [];
	const imgHtml = imgs.length
		? `<div style="display:flex;gap:12px;margin:16px 0">${imgs
				.map(
					(url) => `<img src="${url}" alt="${product.name}" style="width:48%;max-width:280px;border-radius:12px;object-fit:cover" />`,
				)
				.join("")}</div>`
		: "";
	const detailsHtml = hasProduct
		? `<div style="background:#f0fdf4;border:1px solid #d1fae5;border-radius:12px;padding:12px;margin-top:8px">
			<p style="margin:0"><strong>Product:</strong> ${product.name}</p>
			<p style="margin:0"><strong>Price:</strong> ₹${product.price}</p>
			<p style="margin:0"><strong>Type:</strong> ${product.type} &nbsp; <strong>Category:</strong> ${product.category} &nbsp; <strong>Size:</strong> ${product.size}</p>
			${product.description ? `<p style="margin:8px 0 0">${product.description}</p>` : ""}
		</div>`
		: "";

	return `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto">
    <h2 style="color:#059669;margin:0">Plants on Wheels</h2>
    <p>Hi ${enquiry.name}, thanks for your enquiry${productText}.</p>
    ${detailsHtml}
    ${imgHtml}
    <p>We will contact you at <strong>${enquiry.phone}</strong>${emailText}.</p>
    <p style="color:#6b7280;font-size:12px;margin-top:16px">${time}</p>
  </div>`;
}

export function adminEnquiryHtml(enquiry, product) {
	const productName = product?.name || enquiry.productName || "General Enquiry";
	const email = enquiry.email || "-";
	const message = enquiry.message || "-";
	const time = new Date(enquiry.createdAt).toLocaleString();
	const imgs = product?.images && Array.isArray(product.images) ? product.images.slice(0, 2) : [];
	const imgHtml = imgs.length
		? `<div style="display:flex;gap:12px;margin:12px 0">${imgs
				.map(
					(url) => `<img src="${url}" alt="${productName}" style="width:48%;max-width:280px;border-radius:12px;object-fit:cover" />`,
				)
				.join("")}</div>`
		: "";
	const benefitsHtml = product?.benefits && product.benefits.length
		? `<ul style="margin:8px 0;padding-left:20px;color:#374151">${product.benefits
				.slice(0, 5)
				.map((b) => `<li>${b}</li>`) 
				.join("")}</ul>`
		: "";

	return `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto">
    <h2 style="color:#059669;margin:0">New Enquiry</h2>
    <p><strong>Name:</strong> ${enquiry.name}</p>
    <p><strong>Product:</strong> ${productName}</p>
    <p><strong>Phone:</strong> ${enquiry.phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br/>${message}</p>
    ${product ? `<div style="background:#f0fdf4;border:1px solid #d1fae5;border-radius:12px;padding:12px;margin-top:8px">
      <p style="margin:0"><strong>Price:</strong> ₹${product.price}</p>
      <p style="margin:0"><strong>Type:</strong> ${product.type} &nbsp; <strong>Category:</strong> ${product.category} &nbsp; <strong>Size:</strong> ${product.size}</p>
      ${product.description ? `<p style="margin:8px 0 0">${product.description}</p>` : ""}
      ${benefitsHtml}
    </div>` : ""}
    ${imgHtml}
    <p style="color:#6b7280;font-size:12px;margin-top:16px">${time}</p>
  </div>`;
}
