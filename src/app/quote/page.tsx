"use client";

import { useState } from "react";
import { MessageCircle, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { buildQuoteMessage } from "@/lib/whatsapp";

interface MaterialRow {
  id: number;
  material: string;
  quantity: string;
}

const emptyRow = (id: number): MaterialRow => ({ id, material: "", quantity: "" });

const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Renovation & Repairs",
  "Roofing",
  "Plumbing",
  "Electrical Installation",
  "Painting & Finishing",
  "Fencing",
  "Other",
];

export default function QuotePage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [rows, setRows] = useState<MaterialRow[]>([emptyRow(1)]);
  const [error, setError] = useState<string | null>(null);

  const updateRow = (id: number, field: "material" | "quantity", value: string) => {
    setRows((current) =>
      current.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const addRow = () => {
    setRows((current) => [
      ...current,
      emptyRow(Date.now() + Math.floor(Math.random() * 1000)),
    ]);
  };

  const removeRow = (id: number) => {
    setRows((current) =>
      current.length > 1 ? current.filter((row) => row.id !== id) : current
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please provide your name and phone number.");
      return;
    }
    setError(null);

    const message = buildQuoteMessage({
      name,
      phone,
      projectType,
      deliveryLocation,
      items: rows,
      notes,
    });

    window.open(
      `https://wa.me/254733321945?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Request a Quote
        </h1>
        <p className="mt-4 text-slate-500">
          Tell us what you need and RUMISH LTD will help prepare a quotation.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-6 rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Full Name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="John Doe"
            autoComplete="name"
            required
          />
          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="0712 345 678"
            autoComplete="tel"
            required
          />
        </div>

        <Input
          label="Email Address"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <Select
            label="Project Type"
            name="projectType"
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
          <Input
            label="Delivery Location"
            name="deliveryLocation"
            value={deliveryLocation}
            onChange={(event) => setDeliveryLocation(event.target.value)}
            placeholder="e.g. Nakuru Town"
          />
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-slate-800">
            Materials Needed
          </legend>
          <div className="mt-3 flex flex-col gap-3">
            {rows.map((row) => (
              <div key={row.id} className="flex items-end gap-3">
                <div className="flex-1">
                  <Input
                    label={rows.length > 1 ? undefined : "Material"}
                    name={`material-${row.id}`}
                    value={row.material}
                    onChange={(event) =>
                      updateRow(row.id, "material", event.target.value)
                    }
                    placeholder="e.g. Cement"
                  />
                </div>
                <div className="w-36">
                  <Input
                    label={rows.length > 1 ? undefined : "Quantity"}
                    name={`quantity-${row.id}`}
                    value={row.quantity}
                    onChange={(event) =>
                      updateRow(row.id, "quantity", event.target.value)
                    }
                    placeholder="e.g. 50"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeRow(row.id)}
                  disabled={rows.length <= 1}
                  className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:pointer-events-none disabled:opacity-40"
                  aria-label="Remove material row"
                >
                  <Trash2 className="size-4" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
          <Button
            type="button"
            onClick={addRow}
            variant="outline"
            size="sm"
            className="mt-3"
          >
            <Plus className="size-4" aria-hidden="true" />
            Add Another Item
          </Button>
        </fieldset>

        <Textarea
          label="Additional Notes"
          name="notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder="Provide any other details about your project."
          rows={4}
        />

        {error ? (
          <p role="alert" className="text-sm font-medium text-red-600">
            {error}
          </p>
        ) : null}

        <Button type="submit" size="lg" fullWidth>
          <MessageCircle className="size-4.5" aria-hidden="true" />
          Submit Quote Request via WhatsApp
        </Button>

        <p className="text-center text-xs text-slate-400">
          Your request is sent directly to RUMISH LTD on WhatsApp. No account
          or online payment is required.
        </p>
      </form>
    </div>
  );
}
