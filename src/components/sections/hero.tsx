import { cn } from "@/lib/utils";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import { BorderBeam } from "../magicui/border-beam";
import { Button } from "../ui/button";
import Container from "../ui/container";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Companies } from "./testimonial";

const Hero = () => {
  return (
    <Container>
      <section className="text-center pt-48 px-4 flex flex-col items-center justify-center">
        <AnimatedGradientText className="bg-transparent mb-5">
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Introducing Magic UI
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>

        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[360deg] bg-gradient-to-tr from-[#ffffff] to-[#ffffffcc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <h1 className="text-6xl tracking-tighter font-bold mb-6 text-white">
          Waitlist for Developers
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, quis
          natus itaque nesciunt doloribus quaerat.
        </p>
        <div className="w-full flex flex-row justify-center items-center space-x-4">
          <Button className="bg-white/95 hover:bg-white text-black">
            Start building
            <ArrowRight className="ml-2" />
          </Button>
          <Button className="bg-foregroundClr hover:bg-foregroundClr/95 text-white ">
            <div className="w-6 h-6 mr-2 flex items-center justify-center rounded-sm bg-foregroundClr2 ">
              B
            </div>
            Book a call
          </Button>
        </div>

        <div className="overflow-hidden flex items-center justify-center my-20 relative rounded-xl">
          <img
            src="/assets/dark-project-app-screenshot.png"
            alt="browser"
            className="w-[1200px] rounded-[inherit] border border-gray-700 object-contain shadow-lg dark:block"
          />
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
        <Companies />
      </section>
    </Container>
  );
};

export default Hero;
