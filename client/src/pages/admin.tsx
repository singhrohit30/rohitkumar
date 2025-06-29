import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Contact } from "@shared/schema";

export default function AdminPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: contactsResponse, isLoading } = useQuery({
    queryKey: ['/api/admin/contacts'],
  });

  const { data: unreadCountResponse } = useQuery({
    queryKey: ['/api/admin/contacts/unread-count'],
  });

  const markAsReadMutation = useMutation({
    mutationFn: async (contactId: number) => {
      return await apiRequest("PATCH", `/api/admin/contacts/${contactId}/read`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/admin/contacts'] });
      queryClient.invalidateQueries({ queryKey: ['/api/admin/contacts/unread-count'] });
      toast({
        title: "Success",
        description: "Message marked as read",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to mark message as read",
        variant: "destructive",
      });
    },
  });

  const contacts: Contact[] = (contactsResponse as any)?.contacts || [];
  const unreadCount = (unreadCountResponse as any)?.count || 0;

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen portfolio-bg-primary portfolio-text-primary flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen portfolio-bg-primary portfolio-text-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Contact Messages Admin</h1>
          <div className="flex items-center gap-4">
            <p className="portfolio-text-muted">
              Total messages: {contacts.length}
            </p>
            <Badge variant={unreadCount > 0 ? "destructive" : "secondary"}>
              {unreadCount} unread
            </Badge>
          </div>
        </div>

        {contacts.length === 0 ? (
          <Card className="portfolio-bg-secondary border-slate-700/50">
            <CardContent className="text-center py-12">
              <i className="fas fa-inbox text-4xl portfolio-text-muted mb-4 block"></i>
              <h3 className="text-xl font-semibold mb-2">No messages yet</h3>
              <p className="portfolio-text-muted">
                Contact messages will appear here when visitors submit the contact form.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <Card
                key={contact.id}
                className={`portfolio-bg-secondary border-slate-700/50 ${
                  !contact.isRead ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-3">
                        <span>{contact.firstName} {contact.lastName}</span>
                        {!contact.isRead && (
                          <Badge variant="destructive" className="text-xs">
                            NEW
                          </Badge>
                        )}
                      </CardTitle>
                      <p className="portfolio-text-muted text-sm mt-1">
                        {contact.email} • {formatDate(contact.createdAt)}
                      </p>
                    </div>
                    {!contact.isRead && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => markAsReadMutation.mutate(contact.id)}
                        disabled={markAsReadMutation.isPending}
                        className="border-current portfolio-accent hover:portfolio-bg-accent hover:text-white"
                      >
                        Mark as Read
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold portfolio-accent">Subject:</h4>
                      <p className="portfolio-text-primary">{contact.subject}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold portfolio-accent">Message:</h4>
                      <p className="portfolio-text-primary whitespace-pre-wrap">
                        {contact.message}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="border-current portfolio-accent hover:portfolio-bg-accent hover:text-white"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}