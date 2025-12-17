import * as React from "react";
import { Navigation } from "./navigation";
import { cn } from "@/lib/utils";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = React.forwardRef<HTMLDivElement, BaseLayoutProps>(
  ({ children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);

    return (
      <div ref={ref} {...props} className="overflow-x-hidden">
        <div className="w-full fixed top-0 z-40 bg-white border-b border-gray-950/5">
          <div className="grid grid-cols-[0_1rem_1fr_1rem_0] md:grid-cols-[0.5fr_1.5rem_3fr_1.5rem_0.5fr] lg:grid-cols-[1fr_2.5rem_8fr_2.5rem_1fr] xl:grid-cols-[1fr_2.5rem_6fr_2.5rem_1fr] 2xl:grid-cols-[1fr_2.5rem_4fr_2.5rem_1fr]">
            <div className="col-start-3">
              <Navigation />
            </div>
          </div>
        </div>
        <div className="relative mt-13.5 grid grid-cols-[0_1rem_1fr_1rem_0] md:grid-cols-[0.5fr_1.5rem_3fr_1.5rem_0.5fr] lg:grid-cols-[1fr_2.5rem_8fr_2.5rem_1fr] xl:grid-cols-[1fr_2.5rem_6fr_2.5rem_1fr] 2xl:grid-cols-[1fr_2.5rem_4fr_2.5rem_1fr] grid-rows-[auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto] bg-white [--pattern-fg:var(--color-gray-950)]/5">
          {childrenArray.map((child, index) => (
            <section
              key={index}
              className={cn(`col-start-3 row-start-${index + 1}`)}
            >
              {child}
            </section>
          ))}
          <footer
            className={cn(
              `col-start-3 row-start-${childrenArray.length + 1} p-2 border-b border-gray-950/5 grid-spacer`,
            )}
          >
            © {new Date().getFullYear()} Fiqry Choerudin
          </footer>

          {/* Background pattern */}
          <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-pattern-diagonal bg-fixed"></div>
          <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-pattern-diagonal bg-fixed"></div>

          {/* Create line for each children */}
          {childrenArray.map((_, index) => (
            <div
              key={`line-${index}`}
              className={`relative -bottom-px col-span-full col-start-1 row-start-${index + 2} h-px bg-(--pattern-fg)`}
            ></div>
          ))}
        </div>
      </div>
    );
  },
);

BaseLayout.displayName = "BaseLayout";

export { BaseLayout };
