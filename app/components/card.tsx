"use client";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { PropsWithChildren, useRef } from "react";

type CardProps = PropsWithChildren<{ 
  className?: string;
  image?: boolean;
  imgSrc?: string;
  imgAlt?: string;
}>;

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  image = false,
  imgSrc,
  imgAlt,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasImage = image && Boolean(imgSrc);
  const previewWidth = 288;
  const previewHeight = 192;
  const prefersReducedMotion = useReducedMotion();

  const isHovering = useSpring(0, { stiffness: 300, damping: 40 });

  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const halfPreviewWidth = Math.min(previewWidth / 2, rect.width / 2);
    const halfPreviewHeight = Math.min(previewHeight / 2, rect.height / 2);

    const x = Math.min(
      Math.max(e.clientX - rect.left, halfPreviewWidth),
      rect.width - halfPreviewWidth
    );
    const y = Math.min(
      Math.max(e.clientY - rect.top, halfPreviewHeight),
      rect.height - halfPreviewHeight
    );

    mouseX.set(x);
    mouseY.set(y);
    isHovering.set(1);
  }

  function onMouseLeave() {
    isHovering.set(0);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  const scale = useTransform(isHovering, [0, 1], [0, 1]);
  const rotate = useTransform(isHovering, [0, 1], ["-12.5deg", "12.5deg"]);

  const fallbackImg =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80";
  const imageSrc = imgSrc || fallbackImg;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-xl border border-zinc-700/80 bg-zinc-950/70 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.95)] duration-700 hover:border-zinc-400/50 md:border-zinc-600 md:bg-transparent md:shadow-none md:hover:bg-zinc-800/10 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.08),_transparent_45%)] opacity-70 transition duration-500 group-hover:opacity-100 md:hidden" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300/30 to-transparent opacity-70 md:hidden" />

      {hasImage && (
        <div className="relative z-20 h-44 overflow-hidden border-b border-zinc-800/80 bg-zinc-950 md:hidden">
          <img
            src={imageSrc}
            alt={imgAlt || "Project image"}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
          />
        </div>
      )}

      {hasImage && (
        <motion.img
          src={imageSrc}
          alt={imgAlt || "Project image"}
          style={{
            top: mouseY,
            left: mouseX,
            translateX: "-50%",
            translateY: "-50%",
            position: "absolute",
            pointerEvents: "none",
            scale,
            rotate,
            opacity: isHovering, // fade in on hover
            zIndex: 30,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="hidden rounded-xl border border-zinc-200/10 object-cover object-top shadow-2xl md:block md:h-48 md:w-72"
        />
      )}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-0 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-0 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>

      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
};
