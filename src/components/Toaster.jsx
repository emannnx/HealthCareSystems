import React from "react";
import { useToast } from "@/hooks/use-toast";
import "./Toast.css"; // Your CSS file with toasts- prefix

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="toasts-provider">
      {toasts.map(({ id, title, description, action, open, ...props }) => (
        <div
          key={id}
          className={`toasts-toast ${open ? "toasts-toast-open" : "toasts-toast-closed"}`}
          role="alert"
          {...props}
        >
          <div className="toasts-content">
            {title && <div className="toasts-title">{title}</div>}
            {description && <div className="toasts-description">{description}</div>}
          </div>
          {action && <div className="toasts-action">{action}</div>}
          <button
            className="toasts-close"
            aria-label="Close"
            onClick={() => props.onOpenChange && props.onOpenChange(false)}
          >
            ×
          </button>
        </div>
      ))}
      <div className="toasts-viewport" />
    </div>
  );
}
