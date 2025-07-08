"use client";
import { Admin } from "@prisma/client";
import React, { createContext, useEffect, useState } from "react";

type Props = {
  admin: Admin | undefined;
  setAdmin: React.Dispatch<React.SetStateAction<Admin | undefined>>;
};

export const AdminAppContext = createContext<Props>(null!);
export function ContextAdminGlobal({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<Admin>();

  return (
    <AdminAppContext.Provider
      value={{
        admin,
        setAdmin,
      }}
    >
      {children}
    </AdminAppContext.Provider>
  );
}
