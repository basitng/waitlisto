"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { featuredTestimonial, testimonials } from "@/lib/testimonial";

interface Author {
  name: string;
  handle: string;
  imageUrl: string;
  logoUrl?: string;
}

interface Testimonial {
  body: string;
  author: Author;
}

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  index: number;
}> = ({ testimonial, index }) => {
  return (
    <motion.div
      className="rounded-3xl bg-foregroundClr bg-opacity-20 backdrop-filter backdrop-blur-xl p-6 shadow-2xl border border-borderClr relative overflow-hidden h-[250px] flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.2,
        delay: index * 0.05,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-foregroundClr to-foregroundClr2 opacity-20"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.2, 0.22, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
      <blockquote className="text-gray-300 relative z-10 flex-grow overflow-auto">
        <p className="text-base line-clamp-6">{testimonial.body}</p>
      </blockquote>
      <motion.div
        className="mt-4 flex items-center gap-x-4 relative z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.2,
          delay: index * 0.05 + 0.1,
        }}
      >
        <img
          className="h-10 w-10 rounded-full border-2 border-indigo-500"
          src={testimonial.author.imageUrl}
          alt=""
        />
        <div>
          <div className="font-semibold text-white text-sm">
            {testimonial.author.name}
          </div>
          <div className="text-indigo-400 text-xs">
            @{testimonial.author.handle}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BackgroundAnimation: React.FC = () => (
  <motion.div
    className="absolute inset-0 overflow-hidden -z-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="absolute -inset-[10px] opacity-30"
      animate={{
        backgroundImage: [
          "radial-gradient(circle at 30% 70%, rgba(255,128,181,0.3) 0%, transparent 50%)",
          "radial-gradient(circle at 70% 30%, rgba(144,137,252,0.3) 0%, transparent 50%)",
          "radial-gradient(circle at 30% 70%, rgba(255,128,181,0.3) 0%, transparent 50%)",
        ],
        rotate: [0, 180, 360],
        scale: [1, 1.05, 1],
      }}
      transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
    />
    <div className="absolute inset-0 bg-black opacity-90" />
  </motion.div>
);

const AnimatedTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <motion.span
    className="inline-block"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.2,
    }}
  >
    {children}
  </motion.span>
);

const AutoScrollTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const flattenedTestimonials = [...testimonials.flat(2)];
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const itemsPerPage = isMobile ? 1 : 3;
  const totalGroups = Math.ceil(flattenedTestimonials.length / itemsPerPage);

  const nextTestimonials = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalGroups);
  }, [totalGroups]);

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalGroups) % totalGroups);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isAutoScrolling) {
      intervalId = setInterval(nextTestimonials, 5000);
    }
    return () => clearInterval(intervalId);
  }, [isAutoScrolling, nextTestimonials]);

  const toggleAutoScroll = () => {
    setIsAutoScrolling((prev) => !prev);
  };

  const currentTestimonials = flattenedTestimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div
      id="testimonials"
      className="relative flex items-center justify-center overflow-hidden bg-backgroundClr py-12 sm:py-16 md:pt-16 md:pb-24"
    >
      <BackgroundAnimation />
      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.2,
        }}
      >
        <div className="max-w-lg w-full mx-auto mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-2 tracking-wide text-center">
            <AnimatedTitle>What customers</AnimatedTitle>{" "}
            <AnimatedTitle>
              <span className="text-transparent bg-clip-text from-stone-200 to-textClr bg-gradient-to-r">
                are saying?
              </span>
            </AnimatedTitle>
          </h3>
          <motion.p
            className="text-sm sm:text-base leading-6 sm:leading-7 text-center text-primaryTextClr"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.2,
              delay: 0.1,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            nesciunt aliquam? Ipsum recusandae illo veniam?
          </motion.p>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.2,
              }}
            >
              {currentTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.author.handle}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <div className="absolute lg:bottom-4 bottom-0 left-0 right-0 flex justify-center items-center space-x-4 z-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevTestimonials}
          className="bg-foregroundClr bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.div
          className="flex space-x-2 items-center bg-foregroundClr bg-opacity-50 rounded-full px-4 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.2,
            delay: 0.2,
          }}
        >
          {Array.from({ length: totalGroups }).map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === currentIndex ? "bg-indigo-500" : "bg-gray-500"
              } transition-all duration-300`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleAutoScroll}
            className="ml-2 bg-foregroundClr bg-opacity-50 rounded-full p-1 sm:p-2 text-white hover:bg-opacity-75 transition-all"
            aria-label={
              isAutoScrolling ? "Pause auto-scroll" : "Resume auto-scroll"
            }
          >
            {isAutoScrolling ? <Pause size={16} /> : <Play size={16} />}
          </motion.button>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextTestimonials}
          className="bg-foregroundClr bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all"
          aria-label="Next testimonials"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default AutoScrollTestimonials;
