// "use client";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
// import React, { useEffect, useState } from "react";

// interface MeteorStyle {
//   animationDelay: string;
//   animationDuration: string;
// }

// export const Meteors = ({
//   number,
//   className,
// }: {
//   number?: number;
//   className?: string;
// }) => {
//   const meteors = new Array(number || 20).fill(true);
//   const [meteorStyles, setMeteorStyles] = useState<MeteorStyle[]>([]);

//   useEffect(() => {
//     // Only run on client after hydration
//     const styles = meteors.map(() => ({
//       animationDelay: `${Math.random() * 5}s`,
//       animationDuration: `${Math.floor(Math.random() * (10 - 5) + 5)}s`
//     }));

//     setMeteorStyles(styles);
//   }, []);
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {meteors.map((el, idx) => {
//         const meteorCount = number || 20;
//         // Calculate position to evenly distribute meteors across container width
//         const position = idx * (800 / meteorCount) - 400; // Spread across 800px range, centered

//         return (
//           <span
//             key={"meteor" + idx}
//             className={cn(
//               "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
//               "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
//               className,
//             )}
//             style={{
//               top: "-40px", // Start above the container
//               left: position + "px",
//               ...(meteorStyles[idx] || {})
//             }}
//           ></span>
//         );
//       })}
//     </motion.div>
//   );
// };


"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface MeteorStyle {
  animationDelay: string;
  animationDuration: string;
  left: string;
}

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  const [meteorStyles, setMeteorStyles] = useState<MeteorStyle[]>([]);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    // Handle responsive positioning
    const updateDimensions = () => {
      setContainerWidth(window.innerWidth);
    };

    // Initial call
    updateDimensions();

    // Add event listener for window resize
    window.addEventListener("resize", updateDimensions);

    // Generate meteor styles
    const styles = meteors.map(() => ({
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.floor(Math.random() * (10 - 5) + 5)}s`,
      left: "0px" // Will be updated when container width is known
    }));

    setMeteorStyles(styles);

    // Cleanup
    return () => window.removeEventListener("resize", updateDimensions);
  }, [meteors.length]);

  // Update meteor positions when container width changes
  useEffect(() => {
    if (containerWidth > 0) {
      const meteorCount = number || 20;
      const styles = meteors.map((_, idx) => {
        // Scale the spread based on screen width
        const spreadWidth = Math.min(containerWidth * 0.8, 800);
        const position = idx * (spreadWidth / meteorCount) - (spreadWidth / 2);

        return {
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.floor(Math.random() * (10 - 5) + 5)}s`,
          left: `${position}px`
        };
      });

      setMeteorStyles(styles);
    }
  }, [containerWidth, meteors.length, number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className,
          )}
          style={{
            top: "-40px", // Start above the container
            ...(meteorStyles[idx] || {})
          }}
        ></span>
      ))}
    </motion.div>
  );
};