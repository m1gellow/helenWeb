"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Cursor from "../app/Cursor.svg";
import Image from "next/image";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    return () => removeEventListener("mousemove", mouseMoveHandler);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        pointerEvents: "none",
        z: 20,
      }}
    >
      <Image alt="cursor" src={Cursor} className="cursor" />
    </motion.div>
  );
};

export default CustomCursor;
