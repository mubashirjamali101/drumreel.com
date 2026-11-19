import type { Metadata } from "next";
import { MarlowStudio } from "./studio";

export const metadata: Metadata = {
  title: "Marlow",
  robots: { index: false, follow: false },
};

export default function MarlowPage() {
  return <MarlowStudio />;
}
