"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const whyChooseUs = [
  "Experienced team of certified billing specialists",
  "Customized solutions tailored to your practice's needs",
  "Transparent reporting and analytics",
  "Increased collections and reduced denials",
  "Dedicated account manager for personalized support",
];

export function AboutSection1() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Column - About Text */}
          <div className="flex flex-1 flex-col gap-6">
            <h2 id="about-heading" className="heading-lg text-foreground text-center lg:text-left">
              About Best Billing Co.
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground">
              <p className="text-base leading-7">
                Best Billing Co. is a leading medical billing company dedicated to
                helping healthcare providers optimize their revenue cycle and focus on
                patient care.
              </p>
              <p className="text-base leading-7">
                With over 20 years of experience in the healthcare industry, our team
                of certified billing specialists understands the complexities of
                medical billing and stays up-to-date with the latest regulations and
                coding requirements.
              </p>
              <p className="text-base leading-7">
                We pride ourselves on our attention to detail, personalized service,
                and commitment to maximizing your practice's financial performance.
              </p>
            </div>
          </div>

          {/* Right Column - Why Choose Us Card */}
          <div className="flex flex-1 flex-col">
            <Card className="bg-navy-dark rounded-xl border-none p-6 shadow-lg">
              <CardContent className="flex flex-col gap-6 p-0">
                <h3 className="text-xl font-semibold text-white">
                  Why Choose Us?
                </h3>
                <ul className="flex flex-col gap-4">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-white h-5 w-5 shrink-0 mt-0.5" />
                      <span className="text-white text-sm leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

