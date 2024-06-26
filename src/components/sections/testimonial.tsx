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
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-foregroundClr to-foregroundClr2 opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <blockquote className="text-gray-300 relative z-10 flex-grow overflow-auto">
        <p className="text-base line-clamp-6">{testimonial.body}</p>
      </blockquote>
      <div className="mt-4 flex items-center gap-x-4 relative z-10">
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
      </div>
    </motion.div>
  );
};

const BackgroundAnimation: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden -z-10">
    <motion.div
      className="absolute -inset-[10px] opacity-30"
      animate={{
        backgroundImage: [
          "radial-gradient(circle at 30% 70%, rgba(255,128,181,0.3) 0%, transparent 50%)",
          "radial-gradient(circle at 70% 30%, rgba(144,137,252,0.3) 0%, transparent 50%)",
          "radial-gradient(circle at 30% 70%, rgba(255,128,181,0.3) 0%, transparent 50%)",
        ],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
    />
    <div className="absolute inset-0 bg-black opacity-90" />
  </div>
);

const AnimatedTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <motion.span
    className="inline-block"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    {children}
  </motion.span>
);

const AutoScrollTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const flattenedTestimonials = [...testimonials.flat(2)];
  const totalGroups = Math.ceil(flattenedTestimonials.length / 3);

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
    currentIndex * 3,
    currentIndex * 3 + 3
  );

  return (
    <div
      id="testimonials"
      className="relative flex items-center justify-center overflow-hidden bg-backgroundClr py-24 sm:py-24"
    >
      <BackgroundAnimation />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-lg w-full mx-auto mb-16">
          <h3 className="text-white text-3xl font-semibold mb-2 tracking-wide text-center">
            <AnimatedTitle>What customers</AnimatedTitle>{" "}
            <AnimatedTitle>
              <span className="text-transparent bg-clip-text from-stone-200 to-textClr bg-gradient-to-r">
                are saying?
              </span>
            </AnimatedTitle>
          </h3>
          <motion.p
            className="text-base leading-7 text-center text-primaryTextClr"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
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
          <button
            onClick={prevTestimonials}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-foregroundClr bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonials}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-foregroundClr bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-2 items-center">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-indigo-500" : "bg-gray-500"
              } transition-all duration-300`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
          <button
            onClick={toggleAutoScroll}
            className="ml-4 bg-foregroundClr bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all"
            aria-label={
              isAutoScrolling ? "Pause auto-scroll" : "Resume auto-scroll"
            }
          >
            {isAutoScrolling ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoScrollTestimonials;
