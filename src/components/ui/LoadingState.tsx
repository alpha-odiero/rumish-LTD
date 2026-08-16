import { LoaderCircle } from "lucide-react";

interface LoadingStateProps {
  label?: string;
}

export function LoadingState({ label = "Loading..." }: LoadingStateProps) {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center gap-3 py-16 text-slate-500"
    >
      <LoaderCircle className="size-6 animate-spin text-primary" aria-hidden="true" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
