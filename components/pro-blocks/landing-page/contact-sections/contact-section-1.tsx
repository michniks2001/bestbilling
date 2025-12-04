"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export function ContactSection1() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Section Title */}
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <h2 id="contact-heading" className="heading-lg text-foreground">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-base">
              Get in touch with our team to learn how we can help optimize your
              medical billing process.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mx-auto w-full max-w-2xl">
            <div className="flex flex-col gap-6 md:flex-row md:justify-center md:gap-12">
              {/* Email */}
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="bg-background flex h-16 w-16 items-center justify-center rounded-full border shadow-sm">
                  <Mail className="text-primary h-7 w-7" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Email
                  </h3>
                  <Link
                    href="mailto:bestbillingnyc@gmail.com"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    bestbillingnyc@gmail.com
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="bg-background flex h-16 w-16 items-center justify-center rounded-full border shadow-sm">
                  <Phone className="text-primary h-7 w-7" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Phone
                  </h3>
                  <Link
                    href="tel:718-332-9592"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    718-332-9592
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

