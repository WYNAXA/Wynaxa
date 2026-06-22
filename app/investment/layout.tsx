import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment — Wynaxa",
  description:
    "Invest in a diversified portfolio of technology ventures through the Wynaxa platform.",
};

export default function InvestmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
