import { Metadata } from "next";
import { TermsOfServiceContent } from "./TermsOfServiceContent";

export const metadata: Metadata = {
  title: "Terms of Service | Superformance",
  description: "Read the terms and conditions governing the use of Superformance services.",
};

export default function TermsOfServicePage() {
  return <TermsOfServiceContent />;
}
