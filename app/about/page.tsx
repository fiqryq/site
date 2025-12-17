import { BaseLayout } from "@/components/base-layout";
import { Button } from "@/components/ui/button";
import { LucideMail, Scroll } from "lucide-react";

export default function Page() {
  return (
    <BaseLayout>
      <h1 className="px-2 text-responsive-6xl font-bold text-gray-950 tracking-tighter font-mono leading-responsive-tight">
        About Me
      </h1>

      <p className="text-responsive-base px-2 text-gray-700 font-mono tracking-normal leading-responsive-normal grid-spacer">
        {`Hi, I'm Fiqry Choerudin, a 26-year-old software engineer based in Indonesia with over 4 years of remote experience. I'm passionate about exploring new technologies and solving complex engineering challenges. Feel free to reach out at hi@fiqry.dev — let's connect!`}
      </p>

      <div className="grid-spacer inline-flex gap-2">
        <Button size="lg" className=" px-4">
          <Scroll /> Download Resume
        </Button>
        <Button size="lg" variant="link" className=" px-4">
          <LucideMail /> Send Me Email
        </Button>
      </div>
    </BaseLayout>
  );
}
