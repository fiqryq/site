import { BaseLayout } from "@/components/base-layout";

export default function Page() {
  return (
    <BaseLayout>
      <div>
        <h1 className="px-2 text-responsive-6xl font-bold text-gray-950 tracking-tighter font-mono leading-responsive-tight">
          Writings
        </h1>
      </div>
      <p className="text-responsive-base grid-spacer text-balance px-2 text-gray-700 mt-2 font-mono tracking-normal leading-responsive-normal">
        Under Development!!
      </p>
    </BaseLayout>
  );
}
