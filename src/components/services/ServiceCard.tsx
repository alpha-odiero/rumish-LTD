import { ServiceIcon } from "@/components/ui/icons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import type { Service } from "@/types";
import { buildServiceMessage } from "@/lib/whatsapp";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <ServiceIcon name={service.icon} className="size-6" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-navy">{service.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {service.description}
        </p>
      </div>
      <WhatsAppButton
        message={buildServiceMessage(service.name)}
        size="sm"
        className="mt-auto self-start"
      >
        Request This Service
      </WhatsAppButton>
    </div>
  );
}
