"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  FingerPrintIcon,
  Cog6ToothIcon,
  ServerIcon,
  ChartBarIcon,
  CubeTransparentIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

interface Feature {
  name: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
  {
    name: "Seamless Deployment",
    description:
      "Push your code and watch it go live instantly with our automated deployment pipeline.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Advanced Security",
    description:
      "Enterprise-grade security with end-to-end encryption and multi-factor authentication.",
    icon: LockClosedIcon,
  },
  {
    name: "Intelligent Scaling",
    description:
      "Automatically scale your resources up or down based on real-time demand.",
    icon: ArrowPathIcon,
  },
  {
    name: "Biometric Integration",
    description:
      "Seamlessly integrate fingerprint and facial recognition for enhanced user authentication.",
    icon: FingerPrintIcon,
  },
  {
    name: "Powerful API",
    description:
      "Robust API with comprehensive documentation for seamless third-party integrations.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Redundant Backups",
    description:
      "Automated, geo-distributed backups ensure your data is always safe and accessible.",
    icon: ServerIcon,
  },
  {
    name: "Real-time Analytics",
    description:
      "Gain actionable insights with our real-time data analytics and visualization tools.",
    icon: ChartBarIcon,
  },
  {
    name: "Serverless Computing",
    description:
      "Focus on your code, not infrastructure, with our serverless computing platform.",
    icon: CubeTransparentIcon,
  },
  {
    name: "Global CDN",
    description:
      "Lightning-fast content delivery with our global Content Delivery Network.",
    icon: GlobeAltIcon,
  },
];

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({
  feature,
  index,
}) => {
  const gradients = [
    "bg-gradient-to-br from-purple-400 to-indigo-600",
    "bg-gradient-to-br from-green-400 to-cyan-600",
    "bg-gradient-to-br from-yellow-400 to-orange-600",
    "bg-gradient-to-br from-pink-400 to-red-600",
    "bg-gradient-to-br from-blue-400 to-indigo-600",
    "bg-gradient-to-br from-teal-400 to-green-600",
    "bg-gradient-to-br from-red-400 to-pink-600",
    "bg-gradient-to-br from-indigo-400 to-purple-600",
    "bg-gradient-to-br from-orange-400 to-red-600",
  ];

  const cardVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      y: [0, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover="hover"
      variants={cardVariants}
      className="relative p-6 bg-foregroundClr bg-opacity-30 rounded-2xl backdrop-filter backdrop-blur-sm border border-borderClr border-opacity-20 shadow-xl"
    >
      <dt className="flex items-center text-lg font-semibold text-gray-200 mb-4">
        <motion.div
          className={`p-2 rounded-lg ${gradients[index % gradients.length]}`}
          variants={iconVariants}
        >
          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
        </motion.div>
        <span className="ml-4">{feature.name}</span>
      </dt>
      <dd className="text-gray-400">{feature.description}</dd>
    </motion.div>
  );
};

const ModernFeatureShowcase: React.FC = () => {
  return (
    <div
      id="features"
      className="bg-gradient-to-br from-[#131416] to-[#08090a] py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h3 className="text-white text-3xl font-semibold mb-2 tracking-wide text-center">
            Empower Your Vision
          </h3>
          <p className="text-base leading-7 text-center text-primaryTextClr">
            Our comprehensive suite of cutting-edge features brings your ideas
            to life, providing the tools you need to build, scale, and succeed
            in the digital landscape.
          </p>
        </motion.div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            className="rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute w-full mx-auto -inset-x-20 bottom-0 bg-gradient-to-t from-[#08090a] pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.name} feature={feature} index={index} />
          ))}
        </dl>
      </div>
    </div>
  );
};

export default ModernFeatureShowcase;
