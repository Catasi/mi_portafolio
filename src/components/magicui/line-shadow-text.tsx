import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "@motionone/react";

interface LineShadowTextProps extends React.HTMLAttributes<HTMLElement> {
  content: string;
  shadowColor?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function LineShadowText({
  content,
  shadowColor = "white",
  className,
  as = "span",
  ...props
}: LineShadowTextProps) {
  const MotionComponent = motion[as] || as;

  return (
    <MotionComponent
      initial={false}
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      className={cn(
        "relative z-0 inline-flex",
        "after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)]",
        "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
        "after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
        className
      )}
      data-text={content}
      {...props}
    >
      {content}
    </MotionComponent>
  );
}
