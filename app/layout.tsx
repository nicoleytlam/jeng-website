import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "./globals.css";
import { content } from "./content";

export const metadata: Metadata = {
  title: `${content.name} | ${content.descriptor}`,
  description: content.introduction,
  robots: { index: false, follow: false }, // Enable indexing when final content is approved.
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
