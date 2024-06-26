"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",
    icon: "💸",
    color: "rgba(0, 201, 167, 0.2)",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "rgba(255, 184, 0, 0.2)",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "rgba(255, 61, 113, 0.2)",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "rgba(30, 134, 255, 0.2)",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // glassmorphism styles
        "bg-opacity-10 bg-white backdrop-blur-lg backdrop-filter",
        "border border-opacity-20 border-white",
        "shadow-lg shadow-black/5"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-400">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-gray-300">{description}</p>
        </div>
      </div>
    </figure>
  );
};

function AnimatedNotification() {
  return (
    <div className="relative flex max-h-[500px] m-1 min-h-[500px] w-full  flex-col overflow-hidden rounded-lg border border-borderClr bg-foregroundClr p-6 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-backgroundClr to-foregroundClr2 opacity-50"></div>
      <div className="absolute inset-0 backdrop-blur-xl"></div>
      <div className="relative z-10">
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    </div>
  );
}

export default AnimatedNotification;
