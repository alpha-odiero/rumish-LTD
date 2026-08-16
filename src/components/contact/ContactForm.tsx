"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { buildContactMessage } from "@/lib/whatsapp";

const subjects = [
  "Product Availability",
  "Order Inquiry",
  "Bulk Order",
  "Quote Request",
  "Delivery",
  "General Inquiry",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please provide your name and a message.");
      return;
    }
    setError(null);

    const text = buildContactMessage({ name, phone, subject, message });
    window.open(
      `https://wa.me/254733321945?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          autoComplete="name"
          required
        />
        <Input
          label="Phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="0712 345 678"
          autoComplete="tel"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
        />
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-800">Subject</span>
          <select
            name="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="">Select a subject</option>
            {subjects.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Textarea
        label="Message"
        name="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="How can we help you?"
        rows={5}
        required
      />

      {error ? (
        <p role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      ) : null}

      <Button type="submit" variant="whatsapp" size="lg" fullWidth>
        <MessageCircle className="size-4.5" aria-hidden="true" />
        Send Message via WhatsApp
      </Button>

      <p className="text-center text-xs text-slate-400">
        Your message is sent to RUMISH LTD on WhatsApp. We typically respond
        during business hours.
      </p>
    </form>
  );
}
