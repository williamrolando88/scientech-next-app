import { z } from "zod";
import { ContactUsFormSchema } from "../lib/parsers/contactForm";

export type ContactUsForm = z.infer<typeof ContactUsFormSchema>;

export type MotiveOptions = "ventas" | "proyectos";
