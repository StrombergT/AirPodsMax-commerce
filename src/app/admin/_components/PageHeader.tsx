import { ReactNode } from "react";

/**
 * Any reason why there are multiple component directories? I think it might be confusing.
 */
export function PageHeader({ children }: { children: ReactNode }) {
  return <h1 className="text-4xl mb-4">{children}</h1>;
}
