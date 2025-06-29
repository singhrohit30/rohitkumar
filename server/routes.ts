import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // Save the contact message to storage
      const savedContact = await storage.createContact(contactData);
      
      console.log("New contact message received:", {
        id: savedContact.id,
        name: `${savedContact.firstName} ${savedContact.lastName}`,
        email: savedContact.email,
        subject: savedContact.subject
      });
      
      res.json({ 
        success: true, 
        message: "Thank you! Your message has been sent successfully. I'll get back to you soon!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill in all required fields correctly.",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while sending your message. Please try again." 
        });
      }
    }
  });

  // Admin endpoint to get all contact messages
  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error fetching contact messages" 
      });
    }
  });

  // Admin endpoint to mark a message as read
  app.patch("/api/admin/contacts/:id/read", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.markContactAsRead(id);
      res.json({ success: true, message: "Message marked as read" });
    } catch (error) {
      console.error("Error marking message as read:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error updating message status" 
      });
    }
  });

  // Admin endpoint to get unread messages count
  app.get("/api/admin/contacts/unread-count", async (req, res) => {
    try {
      const count = await storage.getUnreadContactsCount();
      res.json({ success: true, count });
    } catch (error) {
      console.error("Error getting unread count:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error getting unread count" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
