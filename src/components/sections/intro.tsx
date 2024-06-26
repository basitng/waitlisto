import React from "react";
import Container from "../ui/container";
import { Bell, Component, Globe, Keyboard } from "lucide-react";
import AppLauncherDashboard from "../ui/app-launcher";
import GlobeLauncher from "../ui/globe-launcher";
import KeyboardLauncher from "../ui/keyboard";
import AnimatedNotification from "../ui/notification";

export default function IntroSection() {
  return (
    <Container className="my-12 sm:my-16 md:my-20 lg:my-24">
      <div className="max-w-lg w-full mx-auto mb-12 sm:mb-16 md:mb-20 px-4">
        <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-2 sm:mb-4 tracking-wide text-center">
          Exclusive&nbsp;
          <span className="text-transparent bg-clip-text from-stone-200 to-textClr bg-gradient-to-r">
            Features
          </span>
        </h3>
        <p className="text-sm sm:text-base leading-6 sm:leading-7 text-center text-primaryTextClr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          nesciunt aliquam? Ipsum recusandae illo veniam?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
        <FeatureCard
          icon={<Component className="text-white" />}
          title="Feature 1"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium autem eos amet dignissimos nemo architecto laboriosam id numquam ducimus!"
          component={<AppLauncherDashboard />}
        />
        <FeatureCard
          icon={<Globe className="text-white" />}
          title="Feature 2"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium autem eos amet dignissimos nemo architecto laboriosam id numquam ducimus!"
          component={<GlobeLauncher />}
        />
        <FeatureCard
          icon={<Keyboard className="text-white" />}
          title="Feature 3"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium autem eos amet dignissimos nemo architecto laboriosam id numquam ducimus!"
          component={<KeyboardLauncher />}
        />
        <FeatureCard
          icon={<Bell className="text-white" />}
          title="Feature 4"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium autem eos amet dignissimos nemo architecto laboriosam id numquam ducimus!"
          component={<AnimatedNotification />}
        />
      </div>
    </Container>
  );
}

const FeatureCard = ({ icon, title, description, component }: any) => (
  <div className="w-full rounded-md overflow-hidden border border-borderClr p-6 sm:p-8 space-y-4 sm:space-y-5">
    {icon}
    <h3 className="text-textClr text-xl sm:text-2xl font-medium mb-2 leading-tight">
      {title}
    </h3>
    <p className="text-sm sm:text-base leading-6 sm:leading-7 text-primaryTextClr">
      {description}
    </p>
    <div className="w-full  overflow-hidden">{component}</div>
  </div>
);
