"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, XIcon } from "lucide-react";
import { useState, type FormEvent } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";

interface DiagnosticFormProps {
  open: boolean;
  onClose: () => void;
}

export function DiagnosticForm({ open, onClose }: DiagnosticFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Diagnóstico IA - ${formData.company}`,
    );
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmpresa: ${formData.company}\nE-mail: ${formData.email}\n\nGostaria de agendar um diagnóstico gratuito.`,
    );
    window.location.href = `mailto:contato@kauai.ai?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: "", company: "", email: "" });
    }, 2500);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="bg-card border-border relative z-10 w-full max-w-md rounded-2xl border p-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground absolute top-4 right-4 transition-colors"
            >
              <XIcon className="size-5" />
            </button>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center gap-4 py-8 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <motion.div
                    className="bg-brand/10 flex size-16 items-center justify-center rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <CheckIcon className="text-brand size-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold">Mensagem enviada!</h3>
                  <p className="text-muted-foreground text-sm">
                    Entraremos em contato em breve.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold">
                      Agendar Diagnóstico
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Preencha seus dados e nossa equipe entrará em contato
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium"
                      >
                        Nome
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Seu nome completo"
                        className={cn(
                          "border-border bg-background placeholder:text-muted-foreground/50 w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all",
                          "focus:border-brand focus:ring-brand/20 focus:ring-2",
                        )}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium"
                      >
                        Empresa
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Nome da empresa"
                        className={cn(
                          "border-border bg-background placeholder:text-muted-foreground/50 w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all",
                          "focus:border-brand focus:ring-brand/20 focus:ring-2",
                        )}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium"
                      >
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="seu@email.com"
                        className={cn(
                          "border-border bg-background placeholder:text-muted-foreground/50 w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all",
                          "focus:border-brand focus:ring-brand/20 focus:ring-2",
                        )}
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar
                  </Button>

                  <p className="text-muted-foreground/60 text-center text-xs">
                    Diagnóstico gratuito e sem compromisso
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
