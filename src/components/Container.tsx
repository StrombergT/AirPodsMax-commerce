export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-screen-lg mx-auto">{children}</div>;
}
