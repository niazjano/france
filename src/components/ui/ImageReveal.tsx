"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { imageReveal, defaultTransition } from "@/lib/animations";
import { cn } from "@/lib/utils";

type ImageRevealProps = Omit<ImageProps, "className"> & {
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  objectPosition?: string;
};

export function ImageReveal({
  className,
  wrapperClassName,
  alt,
  priority = false,
  objectPosition = "center center",
  style,
  ...props
}: ImageRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("overflow-hidden", wrapperClassName)}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={imageReveal}
      transition={defaultTransition}
    >
      <Image
        {...props}
        alt={alt}
        priority={priority}
        className={cn("h-full w-full object-cover", className)}
        style={{ objectPosition, ...style }}
      />
    </motion.div>
  );
}
