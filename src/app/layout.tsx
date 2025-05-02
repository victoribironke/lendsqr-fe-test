"use client";

import "../styles/globals.scss";
import { Suspense } from "react";
import { UsersProvider } from "@/context/user-context";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <UsersProvider>
          <Suspense>{children}</Suspense>
        </UsersProvider>
      </body>
    </html>
  );
};

export default RootLayout;
