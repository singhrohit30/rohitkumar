import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom right, hsl(var(--portfolio-accent) / 0.2), hsl(var(--portfolio-primary)), hsl(var(--portfolio-secondary)))`
        }}
      ></div>
      
      {/* Animated geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse"
          style={{ background: "hsl(var(--portfolio-accent) / 0.1)" }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-bounce-slow"
          style={{ background: "hsl(213 94% 68% / 0.05)" }}
        ></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="portfolio-text-primary">Hi, I'm</span>
            <span className="portfolio-accent block">Rohit Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl portfolio-text-muted mb-8 max-w-3xl mx-auto">
            Cloud Engineer & DevOps Specialist building scalable infrastructure and automating deployments in the cloud
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("work")}
              className="portfolio-bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                // Create a downloadable PDF link
                const link = document.createElement('a');
                //link.href = '/pdfs/GitCheatSheet.pdf'; // This would be replaced with actual PDF URL
                link.href = `${import.meta.env.BASE_URL}pdfs/GitCheatSheet.pdf`;
                link.download = 'Rohit_Kumar_Cloud_Engineer_Resume.pdf';
                link.click();
              }}
              className="border-current portfolio-accent hover:portfolio-bg-accent hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <i className="fas fa-download mr-2"></i>Download Resume
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-current portfolio-accent hover:portfolio-bg-accent hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="portfolio-text-muted hover:portfolio-accent transition-colors"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
