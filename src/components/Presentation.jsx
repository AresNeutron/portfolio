import { ArrowDown } from "lucide-react";

export const Presentation = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in">
            {/* Greetings intro */}
            <span>Greetings, you can call me </span>
            <span className="text-primary">AresNeutron</span>
          </h1>

          <p className="text-sm md:text-base text-muted-foreground opacity-0 animate-fade-in-delay-1">
            {/* Real name note */}
            My real name is Fabio Quevedo, also known as AresNeutron in the developer community.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            {/* Backend focus blurb */}
            As a backend enthusiast and logic architect, I build efficient, scalable systems using Python and C++. My work is driven by algorithms, performance, and continuous learning.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
              View some of my projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
