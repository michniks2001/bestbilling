"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface TestimonialsSection1Props {
  quote?: string;
  authorName?: string;
  authorRole?: string;
  avatarSrc?: string;
}

export default function TestimonialsSection1({
  quote = "I've worked with Best Billing Company for many years, and they are one of the most reliable and efficient medical billing companies. Their knowledgeable team has streamlined our billing process, improving accuracy and reimbursement times.",
  authorName = "Ilya Domnich",
  authorRole = "Google Review • 5 Stars",
  avatarSrc = "/DavidPark.png",
}: TestimonialsSection1Props) {
  return (
    <div
      className="bg-navy-dark rounded-xl p-8 md:p-10 flex flex-col items-center h-full"
      aria-labelledby="testimonial-title"
    >
      {/* Content Container */}
      <div className="flex w-full flex-col items-center gap-8">
        {/* Testimonial Quote */}
        <blockquote
          id="testimonial-title"
          className="text-center text-xl font-medium text-white md:text-3xl"
        >
          &quot;{quote}&quot;
        </blockquote>

        {/* Author Information */}
        <div className="flex flex-col items-center gap-4">
          {/* Author Avatar */}
          <Avatar className="h-12 w-12 rounded-full ring-2 ring-white md:h-14 md:w-14">
            <AvatarImage src={avatarSrc} alt={authorName} />
          </Avatar>

          {/* Author Details */}
          <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
            <span className="text-base font-medium text-white">
              {authorName}
            </span>
            <span className="hidden text-white opacity-50 md:inline-block">
              •
            </span>
            <span className="text-base text-white/80">{authorRole}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
