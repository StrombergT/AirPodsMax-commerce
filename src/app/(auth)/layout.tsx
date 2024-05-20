/**
 * Route groups, snyggt :)
 */

/**
 * I would define SignInForm and SignUpForm in their respective page file. Nothing wrong with the way it is done now, just my personal preference, just trying to encourage thinking about if the abstraction is needed :)
 */

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
