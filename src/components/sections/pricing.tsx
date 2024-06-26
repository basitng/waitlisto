import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: "$19",
    yearlyPrice: "$190",
    description: "Perfect for small teams",
    features: [
      "Up to 5 team members",
      "Basic project management",
      "5GB storage",
      "Email support",
      "API access",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    monthlyPrice: "$49",
    yearlyPrice: "$490",
    description: "For growing businesses",
    features: [
      "Unlimited team members",
      "Advanced project management",
      "50GB storage",
      "Priority support",
      "Advanced integrations",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    description: "For large organizations",
    features: [
      "Customizable team size",
      "Custom workflows",
      "Unlimited storage",
      "Dedicated support",
      "On-premise option",
    ],
    cta: "Contact Sales",
  },
];

const PricingCard: React.FC<{ tier: PricingTier; isYearly: boolean }> = ({
  tier,
  isYearly,
}) => (
  <motion.div
    className={`relative p-6 rounded-2xl overflow-hidden ${
      tier.popular ? "border border-[#5e6ad1]" : "border border-borderClr"
    }`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.01 }}
  >
    <div className="absolute inset-0 bg-foregroundClr bg-opacity-50 backdrop-filter backdrop-blur-xl z-0" />
    {tier.popular && (
      <div className="absolute top-0 right-0 bg-[#5e6ad1] text-white text-xs font-bold py-1 px-3 rounded-bl">
        Popular
      </div>
    )}
    <div className="relative z-10">
      <h3 className="text-2xl font-semibold text-white mb-2">{tier.name}</h3>
      <p className="text-gray-400 mb-4 h-12">{tier.description}</p>
      <AnimatePresence mode="wait">
        <motion.div
          key={isYearly ? "yearly" : "monthly"}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="mb-4"
        >
          <span className="text-4xl font-bold text-white">
            {isYearly ? tier.yearlyPrice : tier.monthlyPrice}
          </span>
          {tier.monthlyPrice !== "Custom" && (
            <span className="text-gray-400 ml-2">
              /{isYearly ? "year" : "month"}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
      <ul className="space-y-3 mb-6">
        {tier.features.map((feature, index) => (
          <li
            key={index}
            className={cn(
              "flex items-center text-primaryTextClr text-base",
              tier.popular && "text-white"
            )}
          >
            <CheckCircle2
              className={cn(
                "h-5 w-5 text-primaryTextClr mr-2 flex-shrink-0",
                tier.popular && "text-white"
              )}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={cn(
          "w-full py-2 px-4 rounded-lg bg-foregroundClr2 text-white hover:bg-foregroundClr2/95 transition-colors duration-300",
          tier.popular && "bg-white text-black hover:bg-white/95"
        )}
      >
        {tier.cta}
      </Button>
    </div>
  </motion.div>
);

const PricingSwitch: React.FC<{ isYearly: boolean; onToggle: () => void }> = ({
  isYearly,
  onToggle,
}) => (
  <div className="flex items-center justify-center space-x-4 mb-8">
    <span
      className={`text-lg ${
        !isYearly ? "text-white font-semibold" : "text-gray-400"
      }`}
    >
      Monthly
    </span>
    <motion.div
      className="w-16 h-7 bg-[#5e6ad1] rounded-full p-1 cursor-pointer"
      onClick={onToggle}
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full"
        animate={{ x: isYearly ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.div>
    <span
      className={`text-lg ${
        isYearly ? "text-white font-semibold" : "text-gray-400"
      }`}
    >
      Yearly
    </span>
  </div>
);

const ModernPricingTable: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div
      id="pricing"
      className="min-h-screen text-white py-20 px-4 relative overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-br from-foregroundClr to-foregroundClr2 opacity-30" /> */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-lg w-full mx-auto my-16">
          <h3 className="text-white text-3xl font-semibold mb-2 tracking-wide text-center">
            Affordable&nbsp;
            <span className="text-transparent bg-clip-text from-stone-200 to-textClr bg-gradient-to-r">
              Pricing
            </span>
          </h3>
          <p className="text-base leading-7 text-center text-primaryTextClr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            nesciunt aliquam? Ipsum recusandae illo veniam?
          </p>
        </div>

        <PricingSwitch
          isYearly={isYearly}
          onToggle={() => setIsYearly(!isYearly)}
        />

        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernPricingTable;
