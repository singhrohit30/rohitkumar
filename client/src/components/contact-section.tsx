import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async (response) => {
      const result = await response.json();
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Success!",
        description: result.message,
      });

      // Reset the submitted state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "An error occurred while sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/singhrohit30", name: "GitHub" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/iamrohitsingh/", name: "LinkedIn" },
    { icon: "fab fa-twitter", href: "https://x.com/rohitsingh30", name: "Twitter" },
    { icon: "fab fa-hashnode", href: "https://hashnode.com/@iamrohitsingh", name: "Hashnode" },
  ];

  return (
    <section id="contact" className="py-20 portfolio-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="portfolio-text-muted text-lg max-w-2xl mx-auto">
            Ready to collaborate? Let's create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold portfolio-accent mb-6">Let's Connect</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ background: "hsl(var(--portfolio-accent) / 0.2)" }}
                >
                  <i className="fas fa-envelope portfolio-accent text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="portfolio-text-muted">rkrohit487@email.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ background: "hsl(var(--portfolio-accent) / 0.2)" }}
                >
                  <i className="fas fa-phone portfolio-accent text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="portfolio-text-muted">+91 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ background: "hsl(var(--portfolio-accent) / 0.2)" }}
                >
                  <i className="fas fa-map-marker-alt portfolio-accent text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="portfolio-text-muted">New Delhi, India</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                    style={{
                      background: "hsl(var(--portfolio-accent) / 0.2)",
                      color: "hsl(var(--portfolio-text-primary))"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "hsl(var(--portfolio-accent))";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "hsl(var(--portfolio-accent) / 0.2)";
                      e.currentTarget.style.color = "hsl(var(--portfolio-text-primary))";
                    }}
                    title={link.name}
                  >
                    <i className={`${link.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="portfolio-bg-primary rounded-xl p-8 shadow-xl">
            {isSubmitted ? (
              <div
                className="p-4 rounded-lg border"
                style={{
                  background: "hsl(134 61% 41% / 0.2)",
                  borderColor: "hsl(134 61% 41% / 0.5)"
                }}
              >
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-emerald-400 mr-3"></i>
                  <span className="text-emerald-400">Thank you! Your message has been sent successfully.</span>
                </div>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">First Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="portfolio-bg-secondary border-slate-600 portfolio-text-primary placeholder:portfolio-text-muted focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Last Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="portfolio-bg-secondary border-slate-600 portfolio-text-primary placeholder:portfolio-text-muted focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            className="portfolio-bg-secondary border-slate-600 portfolio-text-primary placeholder:portfolio-text-muted focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Subject</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="portfolio-bg-secondary border-slate-600 portfolio-text-primary placeholder:portfolio-text-muted focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            className="portfolio-bg-secondary border-slate-600 portfolio-text-primary placeholder:portfolio-text-muted focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full portfolio-bg-accent hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
