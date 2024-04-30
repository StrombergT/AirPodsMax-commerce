export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#1a2028] p-10 rounded-2xl container mx-auto max-w-[350px] mt-20">
      {children}
    </div>
  );
}
