export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-screen-2xl mx-auto mt-10">{children}</div>;
}
