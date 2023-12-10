"use client";
import { authenticate } from "@/lib/actions/auth";
import { Button, TextField } from "@mui/material";
import { FC } from "react";
import { useFormState } from "react-dom";

const Page: FC = () => {
  const [code, action] = useFormState(authenticate, undefined);

  return (
    <form action={action}>
      <h1>Bienvenido</h1>

      <div className="w-full">
        <TextField
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          label="Email"
        />

        <br />

        <TextField
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          label="Password"
        />
      </div>

      <Button type="submit">Log in</Button>

      {code === "CredentialSignin" && (
        <div className="flex h-8 items-end space-x-1 text-red-500">
          <p aria-live="polite" className="text-sm ">
            Invalid credentials
          </p>
        </div>
      )}
    </form>
  );
};

export default Page;
