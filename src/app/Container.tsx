"use client";

import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export default function Container(prpos: Props) {
  return <ThemeProvider attribute="class">{prpos.children}</ThemeProvider>;
}
