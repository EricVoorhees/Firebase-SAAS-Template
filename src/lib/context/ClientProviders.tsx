"use client";

import mixpanel from "mixpanel-browser";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./AuthContext";
import { SubscriptionModalProvider } from "./SubscriptionModalContext";
import { AuthService } from "../auth/AuthService";
import { useEffect } from "react";

const authService = new AuthService();

export default function ClientProviders({ children }: any) {
  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
    if (!token) return;

    mixpanel.init(token, {
      debug: process.env.NODE_ENV !== "production",
      track_pageview: true,
      persistence: "localStorage",
    });
  }, []);

  return (
    <AuthProvider authService={authService}>
      <SubscriptionModalProvider>
        <Toaster />
        {children}
      </SubscriptionModalProvider>
    </AuthProvider>
  );
}
