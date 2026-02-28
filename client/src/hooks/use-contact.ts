import { useMutation } from "@tanstack/react-query";
import { type InsertInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

export function useContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const { error } = await supabase
        .from('inquiries')
        .insert([data]);

      if (error) {
        throw new Error(error.message || "Failed to send message");
      }

      return data;
    },
    onSuccess: () => {
      toast({
        title: "Message received!",
        description: "We'll be in touch with you shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to send",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
