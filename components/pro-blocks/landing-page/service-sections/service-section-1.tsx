"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  BarChart3,
  ClipboardCheck,
  DollarSign,
  ShieldCheck,
  Headphones,
  Badge,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Medical Billing",
    description:
      "Comprehensive medical billing services to ensure timely reimbursements and minimize claim denials.",
  },
  {
    icon: BarChart3,
    title: "Revenue Cycle Management",
    description:
      "End-to-end revenue cycle management to optimize your practice's financial performance.",
  },
  {
    icon: ClipboardCheck,
    title: "Claims Processing",
    description:
      "Efficient claims processing and follow-up to maximize collections and reduce outstanding A/R.",
  },
  {
    icon: DollarSign,
    title: "Payment Posting",
    description:
      "Accurate and timely payment posting to maintain up-to-date financial records for your practice.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Management",
    description:
      "Stay compliant with healthcare regulations and avoid penalties with our compliance management services.",
  },
  {
    icon: Headphones,
    title: "Patient Billing Support",
    description:
      "Provide excellent customer service to patients with questions about their medical bills.",
  },
  {
    icon: Badge,
    title: "Credentialing Services",
    description:
      "Comprehensive provider credentialing and enrollment services with insurance payers to ensure you can bill for your services.",
  },
  {
    icon: Zap,
    title: "Electronic Claims Submission",
    description:
      "Fast and secure electronic claims submission to expedite the reimbursement process.",
  },
];

export function ServiceSection1() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <h2 id="services-heading" className="heading-lg text-foreground">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-background flex flex-col gap-4 rounded-xl border p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-muted flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <Icon className="text-primary h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-foreground text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-6">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

