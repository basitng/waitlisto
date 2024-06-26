import { cn } from "@/lib/utils";
import React from "react";
import { NeonGradientCard } from "../magicui/neon-gradient-card";

interface AppIconProps {
  icon: string;
  name: string;
  rounded?: boolean;
}

const ICON_SIZE = "w-28 h-28";
const ICON_STYLES = `flex items-center group justify-center ${ICON_SIZE} !bg-foregroundClr rounded-xl shadow-md relative z-10`;

const AppIcon: React.FC<AppIconProps> = ({ icon, name, rounded }) => (
  <NeonGradientCard className={cn(ICON_STYLES, rounded && "rounded-full")}>
    <img
      src={`/assets/icons/${icon.toLocaleLowerCase()}.svg`}
      alt={name}
      className={
        "w-16 h-16 object-contain transition duration-150 ease-linear cursor-pointer group-hover:scale-105"
      }
    />
  </NeonGradientCard>
);

const ConnectingLines: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] border border-borderClr rounded-lg" />
    <div className="absolute w-[96%] h-px bg-borderClr" />
    <div className="absolute w-px h-[95%] bg-borderClr" />
  </div>
);

const AppLauncherDashboard: React.FC = () => {
  return (
    <div className="flex items-center w-full justify-center h-auto py-4 bg-backgroundClr">
      <div className="relative grid grid-cols-3 gap-6 p-10 bg-backgroundClr place-content-center place-items-center w-full rounded-3xl shadow-lg">
        <ConnectingLines />
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
  );
};

export default AppLauncherDashboard;
