import Globe from "@/components/magicui/globe";

function GlobeLauncher() {
  return (
    <div className="relative flex md:h-[50vh] h-[35vh] w-full items-center justify-center overflow-hidden rounded-lg pt-8 md:shadow-xl">
      <Globe className="top-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
export default GlobeLauncher;
