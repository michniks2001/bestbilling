"use client";

export function LogoSection10() {
  const text = "Best Billing Co.";

  return (
    <section className="bg-secondary border-b py-24 lg:py-32">
      <div className="container-padding-x container mx-auto">
        <div className="flex items-center justify-center">
          <div className="relative w-full overflow-hidden px-12 md:px-16 lg:px-20">
            <div className="mask-[linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)]">
              <div className="animate-infinite-scroll flex w-max items-center whitespace-nowrap">
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground">
                  {text}
                </h2>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mx-24 md:mx-32 lg:mx-48 xl:mx-64">
                  {text}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 4rem));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 15s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
