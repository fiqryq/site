import { BaseLayout } from "@/components/base-layout";
import { Button } from "@/components/ui/button";
import { Scroll } from "lucide-react";

export default function Page() {
  return (
    <BaseLayout>
      <h1 className="px-2 text-responsive-6xl font-bold text-gray-950 tracking-tighter font-mono leading-responsive-tight">
        Fiqry Choerudin
      </h1>
      <h2 className="text-gray-700 px-2 text-responsive-lg font-mono tracking-tight grid-spacer leading-responsive-snug">
        /ˈfiːk.ri ˌtʃoʊ.eɪˈruː.dɪn/
      </h2>
      <p className="text-responsive-base px-2 text-gray-700 mt-2 font-mono tracking-normal leading-responsive-normal">
        Im a software engineer based in Indonesia with over 4 years of remote
        experience, focusing on frontend development in the React ecosystem.
      </p>

      <Button size="lg" className="grid-spacer px-4">
        <Scroll /> Download Resume
      </Button>

      <div className="grid-spacer px-2">
        <h2 className="text-responsive-3xl font-bold text-gray-950 tracking-tighter font-mono leading-responsive-tight">
          Projects
        </h2>
      </div>
      <div className=" w-full rounded-md bg-white h-full  p-2">
        <p className="text-responsive-base text-gray-700 font-mono tracking-normal leading-responsive-normal">
          {`Sometimes I like to share small projects I've worked on, from things
          I'm learning to ideas I'm experimenting with.`}
        </p>
        <div className="w-full h-full mt-1">
          <div className=" bg-zinc-50 w-full h-[400px] rounded-sm relative border p-5">
            <div className="bg-dot-pattern"></div>
            <div className="text-sm font-mono">Under Development!</div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
