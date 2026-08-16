import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
} from "react";
import { cx } from "@/utils/helpers";

const fieldBase =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";

export interface FieldProps {
  label?: string;
  error?: string;
  hint?: string;
  id?: string;
}

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    FieldProps {}

export function Input({ label, error, hint, id, className, ...props }: InputProps) {
  const inputId = id ?? props.name;
  return (
    <FieldWrapper id={inputId} label={label} error={error} hint={hint}>
      <input
        id={inputId}
        className={cx(fieldBase, error && "border-red-300", className)}
        {...props}
      />
    </FieldWrapper>
  );
}

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    FieldProps {}

export function Textarea({
  label,
  error,
  hint,
  id,
  className,
  ...props
}: TextareaProps) {
  const textareaId = id ?? props.name;
  return (
    <FieldWrapper id={textareaId} label={label} error={error} hint={hint}>
      <textarea
        id={textareaId}
        className={cx(fieldBase, "min-h-28 resize-y", error && "border-red-300", className)}
        {...props}
      />
    </FieldWrapper>
  );
}

export function Select({
  label,
  error,
  hint,
  id,
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> &
  FieldProps & { children: ReactNode }) {
  const selectId = id ?? props.name;
  return (
    <FieldWrapper id={selectId} label={label} error={error} hint={hint}>
      <select
        id={selectId}
        className={cx(fieldBase, "appearance-none pr-10", error && "border-red-300", className)}
        {...props}
      >
        {children}
      </select>
    </FieldWrapper>
  );
}

function FieldWrapper({
  id,
  label,
  error,
  hint,
  children,
}: {
  id?: string;
  label?: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label
          htmlFor={id}
          className="text-sm font-medium text-slate-800"
        >
          {label}
        </label>
      ) : null}
      {children}
      {error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : hint ? (
        <p className="text-sm text-slate-500">{hint}</p>
      ) : null}
    </div>
  );
}
