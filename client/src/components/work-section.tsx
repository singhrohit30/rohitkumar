interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo: string;
  github: string;
}

export default function WorkSection() {
  const projects: Project[] = [
    {
      title: "Multi-Cloud Infrastructure Platform",
      description: "Designed and implemented a scalable multi-cloud infrastructure spanning AWS and Azure with automated failover, monitoring, and cost optimization.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      technologies: ["Terraform", "AWS", "Azure", "Kubernetes"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built enterprise-grade CI/CD pipelines using Jenkins and GitLab CI, reducing deployment time by 80% and improving code quality with automated testing.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      technologies: ["Jenkins", "GitLab CI", "Docker", "Ansible"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Microservices Architecture",
      description: "Migrated monolithic applications to microservices architecture using Docker and Kubernetes, improving scalability and system reliability.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      technologies: ["Docker", "Kubernetes", "Istio", "Helm"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Infrastructure Monitoring System",
      description: "Implemented comprehensive monitoring and alerting system using Prometheus, Grafana, and ELK stack for real-time infrastructure visibility.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "AWS CloudWatch"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Serverless Data Pipeline",
      description: "Developed serverless data processing pipeline using AWS Lambda, S3, and EventBridge for real-time analytics and automated reporting.",
      image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      technologies: ["AWS Lambda", "S3", "EventBridge", "Python"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Security & Compliance Automation",
      description: "Automated security compliance checks and vulnerability scanning using AWS Security Hub, Config, and custom Python scripts.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      technologies: ["AWS Security Hub", "Python", "Terraform", "CloudFormation"],
      liveDemo: "#",
      github: "#",
    },
  ];

  return (
    <section id="work" className="py-20 portfolio-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Cloud Infrastructure Projects</h2>
          <p className="portfolio-text-muted text-lg max-w-2xl mx-auto">
            Enterprise-scale cloud solutions and infrastructure automation projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="portfolio-bg-primary rounded-xl overflow-hidden shadow-xl hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "hsl(var(--portfolio-accent) / 0.8)" }}
                >
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveDemo}
                      className="bg-white portfolio-accent px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                    </a>
                    <a 
                      href={project.github}
                      className="bg-white portfolio-accent px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="portfolio-text-muted mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        background: "hsl(var(--portfolio-accent) / 0.2)",
                        color: "hsl(var(--portfolio-accent))"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
