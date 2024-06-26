import { cn } from "@/lib/utils";
import AnimatedGradientText from "../magicui/animated-gradient-text";
import { BorderBeam } from "../magicui/border-beam";
import { Button } from "../ui/button";
import Container from "../ui/container";
import { ChevronRight } from "lucide-react";
import { Companies } from "./company";
import Particles from "../magicui/particles";

const Hero = () => {
  return (
    <Container className="relative overflow-hidden lg:pt-0 pt-32">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <section className="text-center pt-16 sm:pt-24 md:pt-32 lg:pt-48 px-4 flex flex-col items-center justify-center">
        <AnimatedGradientText className="bg-transparent rounded-full mb-3 sm:mb-5">
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-white to-stone-500 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-sm sm:text-base md:text-base`
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
        <div className="max-w-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Friendly Waitlist for Developers
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
            quis natus itaque nesciunt doloribus quaerat.
          </p>
        </div>
        <div className="w-full relative z-50 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="w-full sm:w-auto bg-white cursor-pointer hover:bg-white/90 text-black">
            Start building
            <ChevronRight className="ml-2" />
          </Button>
          <Button className="w-full sm:w-auto bg-foregroundClr hover:bg-foregroundClr/95 text-white">
            <div className="w-6 h-6 mr-2 flex items-center justify-center rounded-sm bg-foregroundClr2">
              B
            </div>
            Book a call
          </Button>
        </div>

        <div className="overflow-hidden flex items-center justify-center my-10 sm:my-16 lg:my-20 relative rounded-xl max-w-full">
          <img
            src="/assets/dark-project-app-screenshot.png"
            alt="browser"
            className="w-full max-w-[1200px] rounded-[inherit] border border-gray-700 object-contain shadow-lg dark:block"
          />
          <BorderBeam
            colorTo="#fff"
            colorFrom="#78716c"
            size={300}
            duration={12}
            delay={9}
          />
        </div>
        <Companies />
      </section>
    </Container>
  );
};

export default Hero;
