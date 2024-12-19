"use client";

import { useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        toast({
          title: "Erro ao enviar mensagem.",
          description:
            "Ocorreu um problema ao enviar sua mensagem. Tente novamente mais tarde.",
          variant: "destructive",
        });
        return; // Exit the function early
      }

      // Reset form using ref
      if (formRef.current) {
        formRef.current.reset();
      }

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigada pelo contato!",
      });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Erro ao enviar mensagem.",
        description: "Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Label
            htmlFor="name"
            className="text-sm text-stone-500 uppercase tracking-widest font-medium"
          >
            Nome
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            required
            className="border-stone-300 focus-visible:ring-stone-400 text-stone-600 text-sm bg-white rounded-none"
          />
        </div>
        <div className="flex-1 space-y-2">
          <Label
            htmlFor="email"
            className="text-sm text-stone-500 uppercase tracking-widest font-medium"
          >
            E-mail
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            required
            className="border-stone-300 focus-visible:ring-stone-400 text-stone-600 text-sm bg-white rounded-none"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-sm text-stone-500 uppercase tracking-widest font-medium"
        >
          Mensagem
        </Label>
        <Textarea
          name="message"
          id="message"
          rows={6}
          required
          className="border-stone-300 focus-visible:ring-stone-400 text-stone-600 text-sm resize-none bg-white rounded-none"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-[160px] px-4 py-2 text-sm uppercase tracking-widest font-medium bg-stone-950 text-white hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        ) : (
          "Enviar"
        )}
      </button>
    </form>
  );
}
