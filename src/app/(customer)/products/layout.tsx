export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="min-h-screen bg-[#000000]  overflow-y-scroll overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
