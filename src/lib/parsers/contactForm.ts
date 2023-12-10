import { z } from "zod";

export const ContactUsFormSchema = z.object({
  name: z
    .string({ required_error: "Por favor ingrese su nombre" })
    .min(3, "Por favor ingrese su nombre y apellido"),
  email: z
    .string({ required_error: "Por favor ingrese un email" })
    .email("Por favor ingrese un email válido")
    .trim()
    .toLowerCase(),
  motive: z.string({ required_error: "Por favor seleccione un motivo" }),
  phone: z
    .string()
    .min(9, "Por favor ingrese un número teléfonico válido")
    .max(10, "Por favor ingrese un número teléfonico válido")
    .trim(),
  companyName: z.string().optional(),
  message: z.string({
    required_error:
      "Por favor detalle su requerimiento para poder asesorarlo de mejor manera",
  }),
  agreedTermsAndConditionsAndPrivacyPolicy: z
    .string()
    .refine((val) => val === "on", {
      message: "Requerimos tu consentimiento antes de continuar",
    }),
});
