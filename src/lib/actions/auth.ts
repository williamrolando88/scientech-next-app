"use server";

import { signIn, signOut } from "@/services/client/auth";

export async function authenticate(_: string | undefined, formData: FormData) {
  try {
    await signIn("credentials", Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialSignin";
    }
    throw error;
  }
}

export const logOut = async () => {
  await signOut();
};
