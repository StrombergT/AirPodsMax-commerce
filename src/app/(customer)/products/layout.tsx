export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="min-h-screen bg-[#ffff]">{children}</div>
    </div>
  );
}
