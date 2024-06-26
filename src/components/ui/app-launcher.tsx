import { cn } from "@/lib/utils";
import React from "react";
import { NeonGradientCard } from "../magicui/neon-gradient-card";

interface AppIconProps {
  icon: string;
  name: string;
  rounded?: boolean;
}

const ICON_STYLES = `flex items-center group justify-center bg-foregroundClr rounded-xl shadow-md relative z-10`;

const AppIcon: React.FC<AppIconProps> = ({ icon, name, rounded }) => (
  <NeonGradientCard
    className={cn(
      ICON_STYLES,
      rounded && "rounded-full",
      "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
    )}
  >
    <img
      src={`/assets/icons/${icon.toLocaleLowerCase()}.svg`}
      alt={name}
      className={cn(
        "lg:scale-100 scale-125 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain transition duration-150 ease-linear cursor-pointer group-hover:scale-105"
      )}
    />
  </NeonGradientCard>
);

const ConnectingLines: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-[calc(100%-1rem)] h-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] sm:h-[calc(100%-1.5rem)] border border-borderClr rounded-lg" />
    <div className="absolute w-[94%] sm:w-[96%] h-px bg-borderClr" />
    <div className="absolute w-px h-[93%] sm:h-[95%] bg-borderClr" />
  </div>
);

const AppLauncherDashboard: React.FC = () => {
  return (
    <div className="flex items-center relative z-50 w-full justify-center h-auto py-2 sm:py-4 bg-backgroundClr">
      <div className="relative px-4 py-10 sm:p-6 md:p-8 lg:p-10 bg-backgroundClr w-full rounded-2xl sm:rounded-3xl shadow-lg">
        <ConnectingLines />
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 place-items-center">
          <AppIcon icon="redis" name="redis" />
          <AppIcon icon="figma" name="Figma" />
          <AppIcon icon="shopify" name="shopify" />
          <AppIcon icon="slack" name="slack" />
          <AppIcon rounded icon="google-analytics" name="google-analytics" />
          <AppIcon icon="excel" name="excel" />
          <AppIcon icon="postgresql" name="postgresql" />
          <AppIcon icon="team" name="team" />
          <AppIcon icon="google-drive" name="google-drive" />
        </div>
      </div>
    </div>
  );
};

export default AppLauncherDashboard;
