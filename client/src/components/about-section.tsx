export default function AboutSection() {
  return (
    <section id="about" className="py-20 portfolio-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="portfolio-text-muted text-lg max-w-2xl mx-auto">
            Passionate about creating automated, functional, and scalable cloud infrastructure solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold portfolio-accent">My Journey</h3>
            <p className="portfolio-text-muted leading-relaxed">
              With over 6 years of experience in cloud engineering and DevOps, I specialize in designing 
              and implementing scalable cloud infrastructure on AWS and Azure. My journey began with 
              traditional system administration, which evolved into a passion for cloud-native architectures 
              and infrastructure automation.
            </p>
            <p className="portfolio-text-muted leading-relaxed">
              I believe in the power of Infrastructure as Code, continuous integration, and automated 
              deployments. When I'm not architecting cloud solutions, you can find me exploring new 
              cloud services, contributing to DevOps communities, or mentoring teams on cloud best practices.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <span 
                className="px-3 py-1 rounded-full text-sm"
                style={{ 
                  background: "hsl(var(--portfolio-accent) / 0.2)",
                  color: "hsl(var(--portfolio-accent))"
                }}
              >
                Cloud Architect
              </span>
              <span 
                className="px-3 py-1 rounded-full text-sm"
                style={{ 
                  background: "hsl(var(--portfolio-accent) / 0.2)",
                  color: "hsl(var(--portfolio-accent))"
                }}
              >
                DevOps Expert
              </span>
              <span 
                className="px-3 py-1 rounded-full text-sm"
                style={{ 
                  background: "hsl(var(--portfolio-accent) / 0.2)",
                  color: "hsl(var(--portfolio-accent))"
                }}
              >
                Automation Specialist
              </span>
              <span 
                className="px-3 py-1 rounded-full text-sm"
                style={{ 
                  background: "hsl(var(--portfolio-accent) / 0.2)",
                  color: "hsl(var(--portfolio-accent))"
                }}
              >
                Security Focused
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                //src="/images/about.jpg" 
               src = {`${import.meta.env.BASE_URL}images/about.jpg`}
                alt="Rohit Kumar - Cloud Engineer" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div 
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-xl"
              style={{ background: "hsl(var(--portfolio-accent) / 0.2)" }}
            ></div>
            <div 
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-xl"
              style={{ background: "hsl(213 94% 68% / 0.1)" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
