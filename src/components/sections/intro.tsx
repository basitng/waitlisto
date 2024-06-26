import React from "react";
import Container from "../ui/container";
import { Bell, Component, Globe, Keyboard } from "lucide-react";
import AppLauncherDashboard from "../ui/app-launcher";
import GlobeLauncher from "../ui/globe-launcher";
import KeyboardLauncher from "../ui/keyboard";
import AnimatedNotification from "../ui/notification";

export default function IntroSection() {
  return (
    <Container className="my-44">
      <div className="max-w-lg w-full mx-auto my-24">
        <h3 className="text-white text-3xl font-semibold mb-2 tracking-wide text-center">
          Exclusive&nbsp;
          <span className="text-transparent bg-clip-text from-stone-200 to-textClr bg-gradient-to-r">
            Features
          </span>
        </h3>
        <p className="text-base leading-7 text-center text-primaryTextClr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          nesciunt aliquam? Ipsum recusandae illo veniam?
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="w-full rounded-md border space-y-5 border-borderClr p-8">
          <Component name="terminal" className="text-white" />
          <h3 className="text-textClr text-2xl font-medium mb-2 leading-tight">
            Feature 1
          </h3>
          <p className="text-base max-w-lg w-full leading-7 text-primaryTextClr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis praesentium autem eos amet dignissimos nemo architecto
            laboriosam id numquam ducimus!
          </p>
          <AppLauncherDashboard />
        </div>
        <div className="w-full rounded-md overflow-hidden border space-y-5 border-borderClr p-8">
          <Globe name="terminal" className="text-white" />
          <h3 className="text-textClr text-2xl font-medium mb-2 leading-tight">
            Feature 2
          </h3>
          <p className="text-base max-w-lg w-full leading-7 text-primaryTextClr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis praesentium autem eos amet dignissimos nemo architecto
            laboriosam id numquam ducimus!
          </p>
          <GlobeLauncher />
        </div>
        <div className="w-full rounded-md overflow-hidden border space-y-5 border-borderClr p-8">
          <Keyboard name="terminal" className="text-white" />
          <h3 className="text-textClr text-2xl font-medium mb-2 leading-tight">
            Feature 3
          </h3>
          <p className="text-base max-w-lg w-full leading-7 text-primaryTextClr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis praesentium autem eos amet dignissimos nemo architecto
            laboriosam id numquam ducimus!
          </p>
          <KeyboardLauncher />
        </div>
        <div className="w-full rounded-md overflow-hidden border space-y-5 border-borderClr p-8">
          <Bell name="terminal" className="text-white" />
          <h3 className="text-textClr text-2xl font-medium mb-2 leading-tight">
            Feature 4
          </h3>
          <p className="text-base max-w-lg w-full leading-7 text-primaryTextClr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis praesentium autem eos amet dignissimos nemo architecto
            laboriosam id numquam ducimus!
          </p>
          <AnimatedNotification />
        </div>
      </div>
    </Container>
  );
}
