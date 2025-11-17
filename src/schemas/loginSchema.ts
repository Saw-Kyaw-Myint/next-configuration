import { z } from "zod";
import { TFunction, message } from '@/lib/validationMessage';

export const createSignInSchema = (t: TFunction) => {
  return z.object({
    email: z.string().email(message(t, "email", "invalid")),
    password: z.string().min(8, message(t, "password", "min", { min: 8 })),
  });
};

export type SignInSchemaType = z.infer<ReturnType<typeof createSignInSchema>>;
