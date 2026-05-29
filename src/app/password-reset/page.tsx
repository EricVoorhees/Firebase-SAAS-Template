"use client";

import PasswordResetForm from "@/components/auth/PasswordResetForm";
import { Suspense } from "react";

export default function PasswordResetPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white text-sm font-medium text-black/48">
          Loading password reset flow...
        </div>
      }
    >
      <PasswordResetForm />
    </Suspense>
  );
}
