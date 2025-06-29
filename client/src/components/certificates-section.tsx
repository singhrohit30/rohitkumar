interface Certificate {
  title: string;
  issuer: string;
  description: string;
  year: string;
  type: "verified" | "achievement";
}

export default function CertificatesSection() {
  const certificates: Certificate[] = [
    {
      title: "Google Cloud Architect - Professional",
      issuer: "Google Cloud",
      description: "Professional certification validating expertise in designing, developing, and managing secure, scalable cloud solutions on Google Cloud Platform.",
      year: "2024",
      type: "verified",
    },
    {
      title: "Associate Cloud Engineer",
      issuer: "Google Cloud",
      description: "Hands-on certification validating skills in experience deploying cloud applications and monitoring operations on Google Cloud Platform.",
      year: "2024",
      type: "verified",
    },
    {
      title: "Cloud Digital Leader",
      issuer: "Google Cloud",
      description: "Certification demonstrating foundational knowledge of cloud concepts and Google Cloud Platform services.",
      year: "2024",
      type: "verified",
    },
    {
      title: "AWS Knowledge: Cloud Essentials",
      issuer: "Amazon Web Services",
      description: "Certification validating foundational knowledge of AWS cloud concepts, services, and basic architecture.",
      year: "2023",
      type: "verified",
    },
    {
      title: "Crash Course on Python",
      issuer: "Google",
      description: "Certification from Google validating foundational Python programming skills, including data structures and control flow.",
      year: "2020",
      type: "verified",
    },
    /*{
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      description: "Certification validating skills in containerization, Docker fundamentals, and orchestration technologies.",
      year: "2021",
      type: "verified",
    },*/
  ];

  return (
    <section id="certificates" className="py-20 portfolio-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates & Achievements</h2>
          <p className="portfolio-text-muted text-lg max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </div>
        
        {/* Desktop Timeline */}
        <div className="relative hidden md:block">
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full"
            style={{ background: "hsl(var(--portfolio-accent))" }}
          ></div>
          
          <div className="space-y-12">
            {certificates.map((cert, index) => (
              <div key={index} className="flex items-center justify-between">
                {index % 2 === 0 ? (
                  <>
                    <div className="w-5/12 text-right pr-8">
                      <div className="portfolio-bg-secondary rounded-xl p-6 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                        <h3 className="text-xl font-semibold portfolio-accent mb-2">{cert.title}</h3>
                        <p className="portfolio-text-muted text-sm mb-2">{cert.issuer}</p>
                        <p className="portfolio-text-primary">{cert.description}</p>
                        <div className="mt-4 flex justify-end">
                          <span 
                            className={`px-3 py-1 rounded-full text-xs ${
                              cert.type === "verified" 
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {cert.type === "verified" ? "Verified" : "Achievement"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div 
                        className={`w-4 h-4 rounded-full border-4 shadow-lg ${
                          cert.type === "verified" 
                            ? "portfolio-bg-accent border-current"
                            : "bg-yellow-400 border-current"
                        }`}
                        style={{ borderColor: "hsl(var(--portfolio-primary))" }}
                      ></div>
                    </div>
                    <div className="w-5/12 pl-8">
                      <div className="portfolio-accent font-semibold">{cert.year}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12 text-right pr-8">
                      <div className="portfolio-accent font-semibold">{cert.year}</div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div 
                        className={`w-4 h-4 rounded-full border-4 shadow-lg ${
                          cert.type === "verified" 
                            ? "portfolio-bg-accent border-current"
                            : "bg-yellow-400 border-current"
                        }`}
                        style={{ borderColor: "hsl(var(--portfolio-primary))" }}
                      ></div>
                    </div>
                    <div className="w-5/12 pl-8">
                      <div className="portfolio-bg-secondary rounded-xl p-6 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                        <h3 className="text-xl font-semibold portfolio-accent mb-2">{cert.title}</h3>
                        <p className="portfolio-text-muted text-sm mb-2">{cert.issuer}</p>
                        <p className="portfolio-text-primary">{cert.description}</p>
                        <div className="mt-4">
                          <span 
                            className={`px-3 py-1 rounded-full text-xs ${
                              cert.type === "verified" 
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {cert.type === "verified" ? "Verified" : "Achievement"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {certificates.map((cert, index) => (
            <div key={index} className="portfolio-bg-secondary rounded-xl p-6 shadow-xl">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold portfolio-accent">{cert.title}</h3>
                <span className="portfolio-accent text-sm">{cert.year}</span>
              </div>
              <p className="portfolio-text-muted text-sm mb-2">{cert.issuer}</p>
              <p className="portfolio-text-primary text-sm">{cert.description}</p>
              <span 
                className={`px-3 py-1 rounded-full text-xs mt-3 inline-block ${
                  cert.type === "verified" 
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {cert.type === "verified" ? "Verified" : "Achievement"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
