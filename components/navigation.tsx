"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CornerSvg } from "@/components/ui/corner-svg";

const components: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Writings",
    href: "/writings",
  },
  {
    title: "About",
    href: "/about",
  },
];

export function Navigation() {
  return (
    <div className="flex items-center justify-between p-2">
      <CornerSvg className="bg-green-400/20 border-green-500 border border-dashed px-2 py-1 text-gray-950">
        <div className="text-xs font-mono">Available for hire</div>
      </CornerSvg>

      {/* Desktop Menu */}
      <NavigationMenu className="hidden md:flex max-w-full justify-end">
        <NavigationMenuList className="flex-wrap justify-end">
          {components.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link href={item.href}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 p-4">
            {components.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-responsive-lg font-medium hover:text-gray-600"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
