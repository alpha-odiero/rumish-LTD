import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface WhatsAppButtonProps {
  message?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  message,
  href,
  size = "md",
  fullWidth = false,
  className,
  children = "Chat on WhatsApp",
}: WhatsAppButtonProps) {
  const link = href ?? (message ? `https://wa.me/254733321945?text=${encodeURIComponent(message)}` : "https://wa.me/254733321945");

  return (
    <Button
      href={link}
      variant="whatsapp"
      size={size}
      fullWidth={fullWidth}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="size-4.5" aria-hidden="true" />
      {children}
    </Button>
  );
}
