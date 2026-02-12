"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Toaster } from "sonner";

export function Providers({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <ConvexClientProvider>
        {children}
        <Toaster position="top-center" richColors />
      </ConvexClientProvider>
    </ClerkProvider>
  );
}
