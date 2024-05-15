import { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

type GoogleButtonProps = {
  children: ReactNode;
};

export default function GoogleButton({ children }: GoogleButtonProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn("google", { callbackUrl: "http://localhost:3000" });
    } catch (err) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button disabled={isLoading} onClick={loginGoogle} className="w-full ">
      {isLoading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h4 w-4 mr-2 animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      )}
      {children}
    </Button>
  );
}
