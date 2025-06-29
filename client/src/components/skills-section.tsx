import { useEffect, useRef, useState } from "react";

interface SkillData {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillData[];
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Cloud Platforms",
      icon: "fas fa-cloud",
      skills: [
        { name: "AWS", percentage: 95 },
        { name: "Azure", percentage: 85 },
        { name: "Google Cloud", percentage: 75 },
      ],
    },
    {
      title: "IaC & CI/CD",
      icon: "fas fa-cogs",
      skills: [
        { name: "Terraform", percentage: 90 },
        { name: "Jenkins", percentage: 85 },
        { name: "GitLab CI", percentage: 80 },
        { name: "GitHub Actions", percentage: 85 },
      ],
    },
    {
      title: "Containerization",
      icon: "fab fa-docker",
      skills: [
        { name: "Docker", percentage: 95 },
        { name: "Kubernetes", percentage: 85 },
        { name: "Helm", percentage: 75 },
      ],
    },
    {
      title: "Configuration Management & Monitoring",
      icon: "fas fa-chart-line",
      skills: [
        { name: "Ansible", percentage: 90 },
        { name: "Chef", percentage: 75 },
        { name: "Puppet", percentage: 70 },
        { name: "Prometheus", percentage: 85 },
        { name: "Grafana", percentage: 80 },
      ],
    },
    {
      title: "Scripting & Automation",
      icon: "fas fa-terminal",
      skills: [
        { name: "Bash", percentage: 95 },
        { name: "Python", percentage: 90 },
        { name: "PowerShell", percentage: 80 },
      ],
    },
    {
      title: "Security",
      icon: "fas fa-shield-alt",
      skills: [
        { name: "IAM", percentage: 90 },
        { name: "VPNs", percentage: 85 },
        { name: "TLS/SSL", percentage: 85 },
        { name: "Security Audits", percentage: 80 },
      ],
    },
  ];

  const technologies = [
    { icon: "fab fa-aws", name: "AWS" },
    { icon: "fab fa-microsoft", name: "Azure" },
    { icon: "fab fa-google", name: "GCP" },
    { icon: "fab fa-docker", name: "Docker" },
    { icon: "fas fa-dharmachakra", name: "Kubernetes" },
    { icon: "fab fa-git-alt", name: "Git" },
    { icon: "fab fa-jenkins", name: "Jenkins" },
    { icon: "fab fa-python", name: "Python" },
    { icon: "fab fa-linux", name: "Linux" },
    { icon: "fas fa-database", name: "Databases" },
    { icon: "fas fa-network-wired", name: "Networking" },
    { icon: "fas fa-shield-alt", name: "Security" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 portfolio-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="portfolio-text-muted text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="portfolio-bg-secondary rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <i className={`${category.icon} portfolio-accent text-2xl mr-3`}></i>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div 
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ background: "hsl(var(--portfolio-accent))" }}
                    ></div>
                    <span className="portfolio-text-primary font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Technology Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {technologies.map((tech, index) => (
              <i
                key={index}
                className={`${tech.icon} text-4xl hover:portfolio-accent transition-colors cursor-pointer`}
                title={tech.name}
              ></i>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
