import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-4 px-4 py-24 text-center sm:px-6">
      <div className="flex size-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <SearchX className="size-8" aria-hidden="true" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
        Page Not Found
      </h1>
      <p className="text-slate-500">
        We couldn&apos;t find the page you were looking for. It may have been
        moved or removed.
      </p>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Go Home</Button>
        <Button href="/products" variant="outline">
          Browse Products
        </Button>
      </div>
    </div>
  );
}
