import AdminNav from "@/components/AdminNav";
import { Toaster } from "sonner";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <AdminNav />
      <body className="min-h-full flex flex-col">{children}</body>
      <Toaster />
      </>
  );
}
