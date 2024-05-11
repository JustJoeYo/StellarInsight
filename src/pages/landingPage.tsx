import { Footer, Product, ShinyButton, Particles } from "../components/types";
import { TypeAnimation } from "react-type-animation";

export default function LandingPage() {
  return (
    <>
      <div className="relative min-h-screen">
        <Particles
          className={"z-0 absolute top-0 left-0 w-screen min-h-screen"}
        />
        <div className="bg-black min-h-screen flex-col">
          <div className="relative mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-8 lg:py-32 xl:px-20">
            <div className="mx-auto max-w-xl lg:max-w-screen-xl relative z-10">
              <div className="mb-16 lg:mb-0 lg:max-w-lg">
                <div className="mb-6 max-w-xl">
                  <div>
                    <p className="bg-cyan-500 opacity-85 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-white">
                      INTRODUCING
                    </p>
                  </div>
                  <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-200 sm:text-5xl sm:leading-snug">
                    An inspiring new coach <br />
                    for{" "}
                    <span className="inline-block text-cyan-500">
                      <TypeAnimation
                        sequence={[
                          "Valorant",
                          1000,
                          "Counter-Strike 2",
                          1000,
                          "Apex Legends",
                          1000,
                          "Fortnite",
                          1000,
                          "PUBG",
                          1000,
                        ]}
                        wrapper="span"
                        speed={10}
                        style={{ fontSize: ".875em", display: "inline-block" }}
                        repeat={Infinity}
                      />
                    </span>
                  </h2>
                  <p className="text-base text-slate-200 md:text-lg">
                    Get started with the best coach in the industry. We offer a
                    variety of stats, strats, and tips for the most popular
                    games.
                  </p>
                </div>
                <div className="flex items-center">
                  <ShinyButton />

                  <a
                    href="/about"
                    aria-label=""
                    className="ml-6 inline-flex items-center font-semibold text-cyan-600 transition-colors duration-200 hover:text-cyan-400"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:w-5/6 lg:ml-80 flex h-full w-full justify-center lg:absolute top-0 lg:items-end lg:justify-start">
              <Product className="absolute z-1 h-[400px] lg:h-[512px] w-full" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
