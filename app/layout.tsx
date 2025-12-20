import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "HealthFuse — Digital Infrastructure for Healthcare",
  description:
    "HealthFuse is building the unified digital infrastructure connecting hospitals, HMOs, labs, pharmacies, and regulators across Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
