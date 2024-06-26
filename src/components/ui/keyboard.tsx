"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface KeyProps {
  children: React.ReactNode;
  highlighted?: boolean;
  wide?: boolean;
  tall?: boolean;
}

const Key: React.FC<KeyProps> = ({
  children,
  highlighted = false,
  wide = false,
  tall = false,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.div
      className={`
        bg-opacity-10 bg-white text-white rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center
        backdrop-filter backdrop-blur-md border border-opacity-30 border-white
        ${wide ? "col-span-2 h-8 sm:h-10 md:h-12 lg:h-14" : "aspect-square"}
        ${tall ? "row-span-2" : ""}
        ${highlighted ? "bg-opacity-20" : ""}
        relative overflow-hidden
      `}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      whileTap={{ scale: 0.95 }}
      onTapStart={() => setIsPressed(true)}
      onTapCancel={() => setIsPressed(false)}
      onTap={() => setTimeout(() => setIsPressed(false), 100)}
    >
      <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium z-10">
        {children}
      </span>
      <AnimatePresence>
        {isPressed && (
          <motion.div
            className={`absolute inset-0 ${
              highlighted ? "bg-blue-500" : "bg-white"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
      {highlighted && (
        <motion.div
          className="absolute inset-0 bg-blue-500 rounded-lg sm:rounded-xl"
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
};

const KeyboardLauncher: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-foregroundClr to-foregroundClr2 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl max-w-full sm:max-w-2xl mx-auto overflow-hidden">
      <div className="absolute inset-0 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-black"></div>
      <div className="relative grid grid-cols-6 gap-1 sm:gap-2 md:gap-3">
        <Key highlighted>Esc</Key>
        <Key>Q</Key>
        <Key>W</Key>
        <Key highlighted>E</Key>
        <Key>R</Key>
        <Key>T</Key>
        <Key>A</Key>
        <Key highlighted>S</Key>
        <Key>D</Key>
        <Key>F</Key>
        <Key>G</Key>
        <Key>H</Key>
        <Key>Z</Key>
        <Key>X</Key>
        <Key>C</Key>
        <Key highlighted>V</Key>
        <Key>B</Key>
        <Key>N</Key>
        <Key wide>Shift</Key>
        <Key wide>Ctrl</Key>
        <Key wide highlighted>
          Alt
        </Key>
        <Key wide tall>
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            <img
              src="/assets/logo.png"
              className="w-4 sm:w-6 md:w-8"
              alt="Logo"
            />
          </motion.div>
        </Key>
      </div>
    </div>
  );
};

export default KeyboardLauncher;
