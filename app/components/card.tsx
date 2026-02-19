"use client";
import { motion, useMotionTemplate, useSpring, useTransform } from "framer-motion";
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

  // Use a single hover state to control the image animation
  const isHovering = useSpring(0, { stiffness: 300, damping: 40 });

  // Mouse position relative to card
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    // Define the safe zone (e.g., 60px from top and right)
    const safeZone = 160;
    const maxX = rect.width - safeZone;
    const minY = safeZone;

    // If cursor is in the top right corner, clamp the image position
    if (x > maxX && y < minY) {
      x = maxX;
      y = minY;
    }

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

  // Default fallback image if not provided
  const fallbackImg =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80";

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ${className}`}
    >
      {image && (
        <motion.img
          src={imgSrc || fallbackImg}
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
            zIndex: 10,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-32 rounded-lg md:h-48 md:w-64 shadow-lg"
        />
      )}
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>

      {children}
    </div>
  );
};
