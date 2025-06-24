import React from "react";
import { Slot } from "@radix-ui/react-slot";

const variantStyles = {
  default: {
    backgroundColor: "#3b82f6",
    color: "white",
    hoverBg: "#2563eb",
  },
  destructive: {
    backgroundColor: "#ef4444",
    color: "white",
    hoverBg: "#dc2626",
  },
  outline: {
    backgroundColor: "white",
    color: "#374151",
    border: "1px solid #d1d5db",
    hoverBg: "#f3f4f6",
    hoverColor: "#111827",
  },
  secondary: {
    backgroundColor: "#6b7280",
    color: "white",
    hoverBg: "#4b5563",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#374151",
    hoverBg: "#f3f4f6",
    hoverColor: "#111827",
  },
  link: {
    backgroundColor: "transparent",
    color: "#3b82f6",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },
};

const sizeStyles = {
  default: {
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 6,
  },
  sm: {
    height: 36,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 6,
  },
  lg: {
    height: 44,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 6,
  },
  icon: {
    height: 40,
    width: 40,
    padding: 0,
    borderRadius: 6,
  },
};

function useHoverStyle(styleObj) {
  const [hover, setHover] = React.useState(false);
  const baseStyle = { ...styleObj };
  if (hover) {
    if (styleObj.hoverBg) baseStyle.backgroundColor = styleObj.hoverBg;
    if (styleObj.hoverColor) baseStyle.color = styleObj.hoverColor;
  }
  return [baseStyle, { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) }];
}

const Button = React.forwardRef(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      asChild = false,
      disabled = false,
      style,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Get base styles from variant and size
    const variantStyle = variantStyles[variant] || variantStyles.default;
    const sizeStyle = sizeStyles[size] || sizeStyles.default;

    // Combine styles
    const baseStyle = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      whiteSpace: "nowrap",
      fontSize: 14,
      fontWeight: 500,
      cursor: disabled ? "default" : "pointer",
      outlineOffset: 2,
      border: variantStyle.border || "none",
      backgroundColor: variantStyle.backgroundColor,
      color: variantStyle.color,
      height: sizeStyle.height,
      paddingLeft: sizeStyle.paddingLeft,
      paddingRight: sizeStyle.paddingRight,
      borderRadius: sizeStyle.borderRadius,
      userSelect: "none",
      opacity: disabled ? 0.5 : 1,
      ...style,
    };

    if (size === "icon") {
      baseStyle.width = sizeStyle.width;
      baseStyle.padding = sizeStyle.padding;
    }

    const [styleWithHover, hoverHandlers] = useHoverStyle(variantStyle);

    const combinedStyle = { ...baseStyle, ...styleWithHover };

    // Add underline for link variant
    if (variant === "link") {
      combinedStyle.textDecoration = "underline";
      combinedStyle.textUnderlineOffset = "4px";
      combinedStyle.padding = 0;
      combinedStyle.border = "none";
      combinedStyle.backgroundColor = "transparent";
    }

    return (
      <Comp
        ref={ref}
        className={`mooood-button mooood-${variant} mooood-${size} ${className}`}
        style={combinedStyle}
        disabled={disabled}
        {...hoverHandlers}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
