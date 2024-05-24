export default function OrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="min-h-screen bg-[#010409]">{children}</div>
    </div>
  );
}
