"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navigation = {
  path: [
    { pathname: "Projects", path: "#home" },
    { pathname: "Solutions", path: "#solutions" },
    { pathname: "Pricing", path: "#pricing" },
    { pathname: "Company", path: "#company" },
    { pathname: "Support", path: "#support" },
  ],
  actions: [
    { label: "Login", path: "/login" },
    { label: "Sign Up", path: "/signup" },
  ],
};

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 300, damping: 24 },
      opacity: { duration: 0.2 },
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { type: "spring", stiffness: 300, damping: 24 },
      opacity: { duration: 0.2 },
    },
  },
};

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-center z-50 px-4">
        <motion.div
          className={cn(
            "w-full max-w-screen-lg rounded-xl backdrop-blur-md mt-2 py-2 transition-all duration-200 bg-transparent border border-borderClr shadow-sm"
          )}
        >
          <div className="px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="/assets/logo.png" alt="logo" className="h-6" />
                <h1 className="text-xl font-medium ml-2">Magicui</h1>
              </div>

              <div className="hidden md:flex items-center justify-center flex-1">
                {navigation.path.map((item) => (
                  <Link key={item.pathname} href={item.path}>
                    <p className="text-sm text-textClr font-normal  hover:text-white cursor-pointer px-4">
                      {item.pathname}
                    </p>
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center space-x-2">
                {navigation.actions.map((item) => (
                  <Link key={item.label} href={item.path}>
                    <Button
                      variant={
                        item.label.toLowerCase() === "login"
                          ? "ghost"
                          : "default"
                      }
                      style={{ borderRadius: 12 }}
                      size={"sm"}
                      className={cn(
                        "text-sm font-semibold",
                        item.label.toLowerCase() === "login"
                          ? "bg-transparent text-textClr font-normal bg-foregroundClr"
                          : "bg-white text-black font-normal hover:bg-black hover:text-white"
                      )}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>

              <div className="md:hidden flex items-center space-x-2">
                <Link href="/signup">
                  <Button
                    variant="default"
                    size={"sm"}
                    style={{ borderRadius: 12 }}
                    className="text-sm font-semibold bg-[#edeef0] text-gray-700 hover:bg-black hover:text-white"
                    onClick={handleLinkClick}
                  >
                    Sign Up
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size={"sm"}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="z-50"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col justify-center items-center h-full space-y-4 p-4"
            >
              {navigation.path.map((item) => (
                <motion.div key={item.pathname} variants={menuItemVariants}>
                  <Link href={item.path} onClick={handleLinkClick}>
                    <p className="text-2xl text-gray-700 font-medium hover:text-gray-900 cursor-pointer">
                      {item.pathname}
                    </p>
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants}>
                <Link href="/login" onClick={handleLinkClick}>
                  <Button
                    variant="ghost"
                    className="text-2xl font-semibold text-gray-600"
                  >
                    Login
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
