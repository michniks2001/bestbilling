import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { ServiceSection1 } from "@/components/pro-blocks/landing-page/service-sections/service-section-1";
import { AboutSection1 } from "@/components/pro-blocks/landing-page/about-sections/about-section-1";
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <ServiceSection1 />
      <AboutSection1 />
      <section id="testimonials" className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="flex flex-col items-center gap-8">
            <h2 className="heading-lg text-foreground text-center">Testimonials</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              <TestimonialsSection1
                quote="I've worked with Best Billing Company for many years, and they are one of the most reliable and efficient medical billing companies. Their knowledgeable team has streamlined our billing process, improving accuracy and reimbursement times."
                authorName="Ilya Domnich"
                authorRole="Google Review • 5 Stars"
                avatarSrc="/ilya-domnich.png"
              />
              <TestimonialsSection1
                quote="I had an excellent experience with Best Billing Company. The staff is incredibly knowledgeable and professional, and they guided me through the entire process with ease. They are efficient, detail-oriented, and committed to ensuring you receive every penny of reimbursement you're entitled to."
                authorName="Marina Grayevsky"
                authorRole="Google Review • 5 Stars"
                avatarSrc="/marina-grayevsky.png"
              />
            </div>
          </div>
        </div>
      </section>
      <div id="contact">
        <Footer1 />
      </div>
    </main>
  );
}
