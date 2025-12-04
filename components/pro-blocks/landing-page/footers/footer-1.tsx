"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const MENU_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export function Footer1() {
  return (
    <footer
      className="bg-background section-padding-y"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-12 text-center">
          {/* Logo Section */}
          <Link href="/" aria-label="Go to homepage">
            <h3>Best Billing Co.</h3>
          </Link>

          {/* Main Navigation */}
          <nav
            className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Footer navigation"
          >
            {MENU_ITEMS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col items-center gap-6 text-sm">
          {/* Copyright Text */}
          <p className="text-muted-foreground text-center">
            © {new Date().getFullYear()} Best Billing Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
