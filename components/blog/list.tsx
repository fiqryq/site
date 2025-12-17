import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface IListProps {
  children?: React.ReactNode;
  cover: string;
  title: string;
  shortDescription: string;
  date: string;
}

const ListArticle = React.forwardRef<HTMLDivElement, IListProps>(
  ({ cover, title, shortDescription, date, ...props }) => {
    return (
      <div
        className="p-2 flex items-center justify-around w-full gap-2 cursor-pointer bg-white"
        {...props}
      >
        <div className="flex items-center w-full gap-4">
          <Image alt={title} src={cover} width={80} height={80} />
          <div className="space-y-1 w-full">
            <h1 className="text-responsive-2xl font-semibold">{title}</h1>
            <p className="text-responsive-sm font-normal">{date}</p>
          </div>
        </div>
        <p className="text-responsive-base text-balance text-gray-700 mt-2 font-mono tracking-normal leading-responsive-normal">
          {shortDescription}
        </p>
        <ArrowRight size={28} />
      </div>
    );
  },
);

ListArticle.displayName = "List";

export { ListArticle };
