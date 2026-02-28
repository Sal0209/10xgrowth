import { useMutation } from "@tanstack/react-query";
import { type InsertSubscriber } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

export function useNewsletter() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email: data.email }]);

      if (error) {
        throw new Error(error.message || "Failed to subscribe");
      }

      return data;
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the ecosystem!",
        description: "You've successfully joined our growth newsletter.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
