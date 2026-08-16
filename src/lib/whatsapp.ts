import { SITE_PHONE, WHATSAPP_NUMBER } from "@/lib/site";
import type { Product } from "@/types";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const openWhatsApp = (message: string) => {
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
};

export const buildGeneralInquiryMessage = () =>
  `Hello RUMISH LTD, I would like to make an enquiry.`;

export const buildProductInquiryMessage = (product: Product) =>
  `Hello RUMISH LTD, I am interested in the following product:\n\nProduct: ${product.name}\nUnit: ${product.unit}\n\nPlease confirm availability and pricing.`;

export const buildServiceMessage = (serviceName: string) =>
  `Hello RUMISH LTD, I am interested in your ${serviceName} service. I would like more information.`;

export const buildDeliveryInquiryMessage = () =>
  `Hello RUMISH LTD, I would like to ask about delivery options and charges. Could you share more details?`;

export const buildOrderMessage = (
  items: { product: Product; quantity: number }[]
) => {
  const lines = items.map(
    (item, index) =>
      `${index + 1}. ${item.product.name}\nQuantity: ${item.quantity} ${
        item.product.unit
      }`
  );

  const pricedItems = items.filter((item) => typeof item.product.price === "number");
  const total = pricedItems.reduce(
    (sum, item) => sum + (item.product.price ?? 0) * item.quantity,
    0
  );

  const totalLine = total > 0 ? `\nEstimated Total: KSh ${total.toLocaleString("en-KE")}\n` : "";
  const requestPriceNote = items.some((item) => item.product.requestPrice)
    ? "\n(Please include pricing for items marked 'Request Price'.)"
    : "";

  return [
    "Hello RUMISH LTD,",
    "",
    "I would like to place an order.",
    "",
    "Products:",
    "",
    lines.join("\n\n"),
    "",
    totalLine,
    "Please confirm availability and final pricing.",
    requestPriceNote,
    "Thank you.",
  ]
    .filter(Boolean)
    .join("\n");
};

export const buildQuoteMessage = (data: {
  name: string;
  phone: string;
  projectType: string;
  deliveryLocation: string;
  items: { material: string; quantity: string }[];
  notes: string;
}) => {
  const lines = [
    "Hello RUMISH LTD,",
    "",
    "I would like to request a quotation.",
    "",
    `Name: ${data.name || "-"}`,
    `Phone: ${data.phone || "-"}`,
    "",
    `Project Type: ${data.projectType || "-"}`,
    "",
    `Delivery Location: ${data.deliveryLocation || "-"}`,
    "",
  ];

  if (data.items.length > 0) {
    lines.push("Materials Needed:", "");
    data.items.forEach((item, index) => {
      lines.push(
        `${index + 1}. ${item.material.trim() || "Item"} — ${item.quantity.trim() || "Quantity"}`
      );
    });
    lines.push("");
  }

  if (data.notes.trim()) {
    lines.push("Additional Notes:", data.notes.trim(), "");
  }

  lines.push("Thank you.");

  return lines.join("\n");
};

export const buildContactMessage = (data: {
  name: string;
  phone: string;
  subject: string;
  message: string;
}) =>
  [
    "Hello RUMISH LTD,",
    "",
    `My name is ${data.name || "-"}.`,
    "",
    `Subject: ${data.subject || "-"}`,
    "",
    "Message:",
    data.message.trim() || "-",
    "",
    `Phone: ${data.phone || "-"}`,
  ].join("\n");

export const getPhoneLabel = () => SITE_PHONE;
